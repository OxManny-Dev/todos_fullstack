const express = require('express');
const routes = require('./routes');
// the word "index" is special in a node.js application
// when we require a folder without specifying which file
// within that folder that we want to get, by default
// node will search that folder for a file called "index.js"


const app = express();


const PORT = process.env.PORT || 3001;


// middlewares
app.use(express.static('public'));
// creating req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// here we are creating our own custom middleware
// my custom middleware is going to make req.manny exist
// in every route
// a middleware is a function that gets called before/or after request handler is called
const mannyfier = (req, res, next) => {
  req.manny = 'some random dude';
  next();
};
// app.use takes 2 parameters
// 1st one is a string or a function
// if 1st one is not a string, by default it will pass "/" as the argument
app.use(mannyfier);
app.use(routes);






app.listen(PORT, () => console.log(`Server listening on PORT http://localhost:${PORT}`));
