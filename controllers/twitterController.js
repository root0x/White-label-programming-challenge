import TwitterService from '../services/twitterService';
import dotenv from 'dotenv';

// Load twitter credentials from credentials.env file
// This .env file is excluded from the repo
dotenv.config({path: './credentials.env'})

const twitterService = new TwitterService({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

export const test = async(req, res, next) =>
{
    var params = {screen_name: 'nodejs'};
    let tweets = {};
    try 
    {
        tweets = await twitterService.userTimeline('statuses/user_timeline', params);
        res.status(200).json(tweets);
    }
    catch(e)
    {
        console.error(e);
        res.status(500).json(e);
    }
}