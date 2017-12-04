## A guide to TDD a React/Redux SubscriberList App

[View the App online](https://react-redux-magazine-subscriptions.herokuapp.com/)

### Setup:
```
npm install
```

### Start app:
```
npm run start
```

##### TODO: ADD THE FOLLOWING FUNCTIONALITIES #####

### Unit test:
```
npm run test
```

### e2e/feature test:
```
npm run selenium-setup   // run only once
npm run selenium-start   // app must also be started with npm start
npm run e2e-tests
npm run e2e-tests-watch  // if you want to run e2e in watch mode
```

You are building a system that helps match magazines and subscribers. 
A magazine has many Qualities that describe it, for example, "News", "Humor", "French Language", "Bi-monthly”.
A subscriber has a set of Interests that describe the type of magazines she would want to subscribe to. 
Assume subscribers only want to subscribe to magazines whose Qualities include ALL of their Interests. 
For example, a subscriber interested in "News" and "French Language" may subscribe to a magazine that had the qualities: "News", "Humor", "French Language" or "News", "French Language" but NOT "News", "Humor” 

Modeling a simple system that manages subscribers and magazines: 
1) Write a function that adds a new subscriber with his Interests and returns the magazines he would want to subscribe to. 
2) Write a function that modifies the Qualities of a magazine and returns only subscribers whose subscription decision would be affected by that change. Language is your choice. Have fun with it and feel free to keep it simple. We are not looking for one correct answer.