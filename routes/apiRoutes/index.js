const router = require('express').Router();
const userRoutes = require('./userRoutes');

// we have "/api" prepended to every route
router.use('/users', userRoutes);  // prepends "/api/users" to every route declared in "userRoutes"

module.exports = router;