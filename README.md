# LEXICON CODING CHALLENGE

# [LIVE DEMO](https://princestheatre.herokuapp.com/)

## Description

An implementation of Lexicon Digital
Coding Challenge, which allows users to see what movies are available at a given time, and which movie provider streams at the cheapest price.

## Technologies and Dependencies used
-React <br/>
-Nodejs <br/>
-Bootstrap <br/>
-Reactstrap <br/>
-Axios

## Instructions

To run this full stack app, <br/>

-You'll need to have nodejs and npm installed. <br/>

-If you dont have nodejs and npm set up [click here](https://nodejs.org/en/download/) and download the recommended version of nodejs which includes npm.


-Clone the project from the github repo <br/>

Front and back end requires seperate setup.

Initially navigate to ```client``` folder in your terminal from root file and install the node modules for the front with the following command.

### `npm install`

Then navigate to ```server``` folder and install the node modules for the backend using the same command.

### `npm install`

Then use the following command to run the application on the local network. 
### `npm run dev`

After running this command, your default browser should open [http://localhost:3000](http://localhost:3000). 
If for some reason browser doesn't open, open your preferred browser and navigate to [http://localhost:3000](http://localhost:3000).


The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Testing

Navigate to the ```client``` folder and run the following command:

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Context

This application is for people who would like to compare movie prices in a single platform.



## API Key

You don't need to implement any API keys as its implemented in ```.env``` file in ```/server```. If you need to replace the key with yours, navigate to ```/server/env``` and replace ```MOVIES_API_KEY``` with your API KEY.

### File Structure

The application frontend and backend is seperated into 2 major folders. The front end uses a standard react app approach and backend uses a nodejs server. 



## Architectural Elements and Decisions

The application uses a standard react app approach in the frontend to seperate UI elements into smaller components, which helps collaborators understand the application logic as well as testing. Smaller components can be tested in isolation, and would make it easier to control any state which has to be maintained.



## Trade offs

-The application requires extensive frontend and backend setup.

-The application might require extensive testing.


## Assumptions 

-Response recieved from the API might not be reliable, so relevant functionality needs to be implemented. In case of an error, the application will recall ```getMovies()``` function up to 10 times to ensure that a response is recieved.

-Another approach would be periodically storing the data in MongoDB database or localstorage.









