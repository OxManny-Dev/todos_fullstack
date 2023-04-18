const router = require('express').Router();
const {getUsers, createUser} = require("../../../controller/userController");

// we have /api/users prepended to every route declared in here

/* MVC  Model-View-Controller*/

router.route('/')
  .get(getUsers)
  .post(createUser)




module.exports = router;