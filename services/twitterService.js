import CacheService from './cacheService';
import Twitter from 'twitter';

export default class TwitterService 
{
    static cacheService;

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
        {
            return await this.#parseTwitterJson(this.cacheService.get(stringParamKey));
        }
        const tweets = await this.client.get('statuses/home_timeline', params);
        const parsedTweets = this.#parseTwitterJson(tweets);
        this.cacheService.set(stringParamKey,parsedTweets);
        return parsedTweets;
    }

    #parseTwitterJson(obj)
    {
        return obj.map((o) => { return {
            created_at: o.created_at,
            id: o.id,
            text: o.text,
            ...(Object.keys((((o || {}).extended_entities || {})).media || {}).length > 0 ? { // check if extended_entities.media is not undefined
                media : {
                    type: o.extended_entities.media[0].type,
                    imageUrl: o.extended_entities.media[0].media_url_https,
                    ...(o.extended_entities.media[0].type === 'video' ? {
                        video : {
                            url : o.extended_entities.media[0].video_info.variants.sort((a,b) => b.bitrate - a.bitrate)[0]
                        }
                    } : '' )
                }
            } : '' ) ,
            user : o.user.screen_name
        }})
    }
    

}

