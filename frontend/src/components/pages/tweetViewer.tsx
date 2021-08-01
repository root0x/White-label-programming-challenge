import React, {useEffect, useRef, useState} from 'react';
import { Box, Heading } from '@chakra-ui/layout';
import Masonry from 'react-masonry-css';
import axios from 'axios';
import Tweet from '../tweet';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    650: 1
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
    const [isLoading, setLoading] = useState(true);
    const [isLoadingMore, setLoadingMore] = useState(false);
    const isBottomVisible = useIntersectionObserver(ref,{threshold: 0.5}, false);
    const [tweets,setTweets] = useState<any[]>([]);
    const [maxId,setMaxId] = useState<string|undefined>(undefined);
    const [bottomOffset, setBottomOffset] = useState<number>();
    const fetchData = async() => 
    {
        setLoadingMore(true)
        const tempTweets = await getTweets(maxId);
        setTweets([
            ...tweets,
            ...tempTweets]);
        // console.log(tweets);
        setMaxId(getMaxId(tempTweets));
        setLoading(false);
        setLoadingMore(false);
        // work out height of smallest column and place observer div to be 250px above that
        // this is so that the new tweets load before the user reaches the end
        setBottomOffset(parseInt(Array.from(document.querySelectorAll('.my-masonry-grid_column')).map((elem) => 
        window.getComputedStyle(elem,null).getPropertyValue('height')).sort()[0].replace('px',''),10) + 250);
    }
    useEffect(() => { // Initially get data;
        fetchData();
      }, []);

    useEffect(() => {
      if(!isLoading && !isLoadingMore)
      {
          console.log('fire');
          fetchData();
        }
      }, [isBottomVisible]);
    

    return (
        <Box
            bg='lightGrey'
            as='main'
        >
            <Heading as='h1' textAlign='center' 
            fontSize={{base: '2xl', md: '5xl', lg: '6xl'}} 
            padding={['25px 0 0 15px', '50px']}>Latest Tweets</Heading>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
                {!isLoading && tweets.map((tweet,index) => (
                    <Tweet key={tweet.id} tweet={tweet}/>
                ))}

        </Masonry>
        <Box ref={ref} position='absolute' 
        bottom={isLoading ? '0px' : '500px'}
        // have to use sx attribute because of non standardized breakpoint
        sx={{
            
            '@media (min-width: 650px) ' : {
              top: isLoading ? '0px' : bottomOffset,
              bottom: 'unset'
            }
        }}
        // top={{base: '200px', '1024px' : isLoading ? '0px' : bottomOffset}} 
        width='100%' height='20px'></Box>
        </Box>
    )
}

export default tweetViewer;