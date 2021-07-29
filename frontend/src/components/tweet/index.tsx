import React, {useRef, useEffect,useState} from 'react';
import useWindowSize from '../hooks/useWindowSize';
import {Box} from '@chakra-ui/react';

interface props 
{
    tweet : {
        created_at: String,
        id: Number,
        text: String,
        user: String,
        media?: {
            type: String,
            imageUrl: String,
            video? : {
                bitrate?: Number,
                content_type: String,
                url: String
            }
        }
    }
    autoRows: Number
}

const Tweet : React.FC<props> = ({tweet, autoRows}) =>  {
    const ref = useRef(null);
    const [rowEnd, setRowEnd] = useState<string>('');
    console.log(ref);

    useEffect(() => {
        calcGridRowEnd();
    }, [])

    const calcGridRowEnd = () => {
        setRowEnd('span ' + Math.ceil(ref.current.getBoundingClientRect().height /autoRows));
    }
    return (
        <Box
            w="100%"
            gridRowEnd={rowEnd}
        >
            <Box
                ref={ref}
            >
                {tweet.text}

            </Box>
        </Box>
    )
}

export default Tweet;