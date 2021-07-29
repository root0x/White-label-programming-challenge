const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        port: 8080,
        watchContentBase: true,
        hot: true,
        index: '',
        historyApiFallback: true,
        proxy: {
            context: ['/api'],
            target: 'http://localhost:3000',

        },
    },
    devtool: 'source-map',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: (_path) => !_path.includes('@chakra-ui') && /node_modules/.test(_path),
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.svg$/,
            //     use: ['@svgr/webpack'],
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
    ],
};
