import NodeCache from 'node-cache';

export default class Cache 
{
    constructor(stdTTL) // standard ttl in seconds for keys
    {
        this.cache = new NodeCache({stdTTL, deleteOnExpire: true})
    }

    set(key,value, ttl=900) // set ttl to default to 15 minutes
    {
        this.cache.set(key,value,ttl);
    }

    get(key)
    {
        return this.cache.get(key);
    }
    
    has(key)
    {
        return this.cache.has(key);
    }

    del(key)
    {
        this.cache.del(key);
    }


}