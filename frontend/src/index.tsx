import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import TweetViewer from './components/pages/tweetViewer';


ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider
                resetCSS
                theme={theme}
            >
            <TweetViewer />
            </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);