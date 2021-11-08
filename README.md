# NYT-search-board

This project consists of a web application that allows users to acess a list of news gathered from the New York Times public API. 


It's a react bases solution that allows for users to:


- Scroll through a list of news articles with the respective headlines;

- Search field by body, headline and byline of the articles;

- A detailed article view screen;


This list is populated with the information from the article search public API. 
To run the app after clonning the project, please run npm install and yarn start


### Technologies used 
- React (TypeScript)
- React-router
- Redux
- Redux-persist

### Proj Architecture

The main folder src is devided into 5 main folders: components, routes, services, utilities, views;

- The components folder contains all the components of the project devided following the atomic design principle; 
- The routes folder contains all the routes and configs associated with routing;
- The services cointains 2 folders: api and redux
    - Api folder contains the code to call the api;
    - Redux contains all the logic of the application state
- Utilities is a folder with small utility functions
- Views is the folder that contains all the possible views of the project


Note: This project also uses the .env files to save the API_TOKEN, at the time the file is not inside the .gitignore so it stays inside the project when it's downloaded 
