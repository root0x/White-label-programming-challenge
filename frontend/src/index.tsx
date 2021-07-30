import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {
    QueryClientProvider,
    QueryClient,
} from 'react-query';
import theme from './theme';

import TweetViewer from './components/pages/tweetViewer';
import './styles/masonry.css';

const queryClient = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider
                    resetCSS
                    theme={theme}
                >
                <TweetViewer />
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);