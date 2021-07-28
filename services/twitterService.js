import Twitter from 'twitter';
import CacheService from './cacheService';

export default class TwitterService 
{
    
    constructor({consumer_key, consumer_secret, access_token_key,access_token_secret})
    {
        this.cacheService = new CacheService(900);
        this.client = new Twitter({
            consumer_key,
            consumer_secret,
            access_token_key,
            access_token_secret
        })
    }

    async userTimeline(params)
    {
        const stringParamKey = JSON.stringify(params);
        if(this.cacheService.has(stringParamKey))
            return this.cacheService.get(stringParamKey);
        const tweets = await this.client.get('statuses/user_timeline', params);
        this.cacheService.set(stringParamKey,tweets);
        return tweets;
    }

}

