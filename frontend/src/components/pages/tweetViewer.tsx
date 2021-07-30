import React, {useEffect, useRef, useState} from 'react';
import { Box, Heading } from '@chakra-ui/layout';
import { useInfiniteQuery, FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import Masonry from 'react-masonry-css';
import axios from 'axios';
import Tweet from '../tweet';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { last } from 'lodash';
import { useAccordionDescendantsContext } from '@chakra-ui/accordion';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };


const getTweets = async(maxId? : string) => {
  // console.log(maxId);
    const res = await axios.get('/api/query' + (maxId ? ('?maxId=' + maxId) : ''));
    return res.data
}

const getMaxId = (tweets : any) =>
{
    return Math.min.apply(Math, tweets.map((o) => o.id));
}

const tweetViewer = () => {
    const ref= useRef(null);
    // const data = useState(origData)
    const [count, setCount] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [isLoadingMore, setLoadingMore] = useState(false);
    const isBottomVisible = useIntersectionObserver(ref,{threshold: 0.5}, false);
    const [tweets,setTweets] = useState<any[]>([]);
    const [maxId,setMaxId] = useState<string|undefined>(undefined);
    const [bottomOffset, setBottomOffset] = useState<number>();
    const fetchData = async() => 
    {
        
        const tempTweets = await getTweets(maxId);
        setTweets([
            ...tweets,
            ...tempTweets]);
        // console.log(tweets);
        setMaxId(getMaxId(tempTweets));
        setLoading(false);
        // work out height of smallest column and place observer div to be 250px above that
        // this is so that the new tweets load before the user reaches the end
        setBottomOffset(parseInt(Array.from(document.querySelectorAll('.my-masonry-grid_column')).map((elem) => 
        window.getComputedStyle(elem,null).getPropertyValue('height')).sort()[0].replace('px',''),10) + 250);
    }
    useEffect(() => { // Initially get data;
        fetchData();
      }, []);

    useEffect(() => {
      if(!isLoading)
      {
          console.log('fire');
          fetchData();
        }
        isBottomVisible && setCount(count + 1);
      }, [isBottomVisible]);
    

    return (
        <Box
            bg='lightGrey'
        >
            <Heading textAlign='center' size='4xl' padding='50px'>Latest Tweets</Heading>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
                {!isLoading && tweets.map((tweet,index) => (
                <Tweet key={index} tweet={tweet}/>
                ))}

        </Masonry>
        <Box ref={ref} position='absolute' top={isLoading ? '0px' : bottomOffset} width='100%' height='20px'></Box>
        </Box>
    )
}

export default tweetViewer;