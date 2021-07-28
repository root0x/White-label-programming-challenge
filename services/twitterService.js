import Twitter from 'twitter';

export default class TwitterService 
{

    constructor({consumer_key, consumer_secret, access_token_key,access_token_secret})
    {
        this.client = new Twitter({
            consumer_key,
            consumer_secret,
            access_token_key,
            access_token_secret
        })
    }

    async userTimeline(params)
    {
        return this.client.get('statuses/user_timeline', params);
    }

}

