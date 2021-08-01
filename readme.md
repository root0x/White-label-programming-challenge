# Instructions to build and run the web app

1. First install the node modules of both front end and api. They are self contained apps with their own package.json's. If you are in a terminal and inside the directory of this repo you can run cd frontend && yarn install -D && cd ../api && yarn install -D
2. To the run frontend webserver run cd frontend && yarn run dev . This will launch the webpack dev server which will build and serve the files. Webpack dev server also acts as a reverse proxy for the api so all requests are from the 8080 port.
3. To run the backend cd api && yarn run serve . To be able to make requests to the Twitter API you will need to place a file called credentials.env inside the root of the api folder. This file will be sent on a email for security purposes.
4. The website will be running on http://localhost:8080 enjoy.


The project has been tested on OS X 10.13.6 running node 14.15.1 and latest versions of Firefox and Chrome