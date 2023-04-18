const fs = require('fs');
const path = require('path');

const getUsers = (req, res) => {
  console.log(req.manny, 'L:33');
  fs.readFile(path.join(__dirname, '..', 'db', 'users.json'), 'utf8', (err, users) => {
    if (err) {
      return res.status(500).json({err});
    }

    res.json(JSON.parse(users));
  });
};


const createUser = (req, res) => {

  // console.log(req.manny)// undefined
  const {firstName, lastName} = req.body;

  if (firstName && lastName) {
    //  read the users.json file
    fs.readFile(path.join(__dirname, '..', 'db', 'users.json'), 'utf8', (err, users) => {
      //  check for errors if any happened
      if (err) {
        return res.status(500).json({err});
      }

      const data = JSON.parse(users);
      //  add data to the array from users.json file
      data.push({
        firstName,
        lastName,
      });

      //  write the new array to the users.json file
      fs.writeFile(path.join(__dirname, '..', 'db', 'users.json'), JSON.stringify(data, null, 2), (err) => {

        if (err) {
          return res.status(500).json({err});
        }
        //  send newly added data to the front-end
        res.json({firstName, lastName});
      });


    });
  } else {
    res.status(400).json({error: 'FirstName and LastName are required'});
  }

}

module.exports = {
  getUsers,
  createUser,
};