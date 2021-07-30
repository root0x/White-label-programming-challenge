import React, {useRef, useEffect,useState} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import {
    Box, 
    Heading,
    Flex, 
    Link,
    Image,
} from '@chakra-ui/react';
import Video from '../video';


interface props 
{
    tweet : {
        created_at: String,
        id: Number,
        text: String,
        user: String,
        media?: {
            type: string,
            imageUrl: string,
            video? : {
                bitrate?: number,
                content_type: string,
                url: string
            }
            sizes : {
                w : number,
                h : number,
                resize: string
            }
        }
    }
    autoRows: number
}

const Tweet : React.FC<props> = ({tweet, autoRows}) =>  {
    
    return (
        <Flex>
            <Box
                margin='10px'
                // padding='20px'
                border='1px solid lightGrey2'
                borderRadius='5px'
                bg='white'
                boxShadow='md'

            >
                {(tweet.media && tweet.media.type === 'photo') && 
                    <Image 
                        src={tweet.media.imageUrl + '?name=small'}
                        htmlWidth={tweet.media.sizes.w}
                        htmlHeight={tweet.media.sizes.h}
                        margin='0 auto'
                        borderRadius='5px 5px 0 0'
                        width='100%'
                        /> }
                {(tweet.media && tweet.media.type === 'video') &&
                    <Video video={tweet.media}/>
                }
                <Box padding='30px'>
                    <Heading size='md' paddingBottom='10px'>{tweet.text}</Heading>
                        <Heading size='sm'>
                            <Link href={'https://twitter.com/' + tweet.user}>
                                @{tweet.user}
                            </Link>
                            </Heading>
                </Box>
            </Box>
        </Flex>
    )
}

export default Tweet;