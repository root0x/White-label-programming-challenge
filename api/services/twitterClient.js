import fetch from 'node-fetch';
import crypto from 'crypto';
import uuid from 'uuid';
import oauthSignature from 'oauth-signature';
export default class TwitterClient
{
    #credentials = {};

    constructor({consumer_key, consumer_secret, access_token_key,access_token_secret})
    {
        this.#credentials = {
            consumer_key,
            consumer_secret,
            access_token_key,
            access_token_secret
        }
    }


    async get(endpoint, params)
    {
        return await this.#client(endpoint,params,'GET');
    }

    async post(endpoint,params)
    {
        return await this.#client(endpoint,params,'POST');
    }

    async #client(endpoint, params, method)
    {
        const baseUrl = `https://api.twitter.com/1.1/${endpoint}.json`;
        const url = this.#buildUrl(baseUrl,params,method);
        const response = await fetch(url,{
            method,
        })
        const data = await response.json();
        return data;        
    }

    /*
        This function handles building of the url string with query parameters
        This function also creates the OAuth 1.0a signature with signing key and base string
    */
    #buildUrl(baseUrl, queryParams, method)
    {
        const oauth_nonce = crypto.randomBytes(32).toString('hex');

        const siningParams = {
            ...queryParams,
            oauth_consumer_key: this.#credentials.consumer_key,
            oauth_nonce,
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: Math.floor(Date.now() / 1000), // unix timestamp
            oauth_token: this.#credentials.access_token_key,
            oauth_version: '1.0'
        }
        let parameterString = '';
        // Creates the percent encoded parameter string
        // Firstly sorts the list of parameter keys in alphabetical order
        // Next builds up percent encoded key value string with & as delimeter
        // eg. count=2&include_entities=true
        Object.keys(siningParams).sort().forEach(key => parameterString+= `${this.#fixedEncodeURIComponent(key)}=${this.#fixedEncodeURIComponent(siningParams[key])}&`);
        // remove last & from string
        parameterString = parameterString.slice(0,-1);

        // Creates the signature base string
        // This string includes http method in uppercase prepended to the parameter string with the url of the endpoint
        // this is also delimited with an & and percent encoded
        const signatureBaseString = `${method}&${this.#fixedEncodeURIComponent(baseUrl)}&${this.#fixedEncodeURIComponent(parameterString)}`;
        // Creates the signing key
        // percent encodes the consumer secret and oauth token secret and place into 1 string delimited by &
        const siningKey = this.#fixedEncodeURIComponent(this.#credentials.consumer_secret)+
                          '&'+this.#fixedEncodeURIComponent(this.#credentials.access_token_secret);
        // Calculates the signature
        // Signature is a HMAC using the SHA1 algorithm
        siningParams.oauth_signature = crypto.createHmac('sha1', siningKey).update(signatureBaseString).digest('base64');
        // Finally builds the URL object with searchParams which is lastly converted into a string to be then used in the HTTP request
        let url = new URL(baseUrl);
        Object.keys(siningParams).forEach(key => url.searchParams.append(key, siningParams[key]));
        return url.toString();
    }

    // implementation from 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/this.#fixedEncodeURIComponent?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FencodeURIComponent
    #fixedEncodeURIComponent(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16);
        });
    }

}