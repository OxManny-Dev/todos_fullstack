// this creates a router-level middleware
// const fs = require("fs");
// const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// /api/users

// we were forwarded to this router level middleware when "/" was hit
// what we want to do is forward the user to another router level middleware
// if /api is hit
router.use('/api', apiRoutes); // this line prepends "/api" to every route declared inside "apiRoutes"

//create our folder structure to reflect our api

// /api/users
// /api/todos

/*
*  routes
*    -api
*      -users
*      -todos
*
*
*
* */
// 2nd one is a function
// Get all the data in 1 table
// /api/users



module.exports = router;