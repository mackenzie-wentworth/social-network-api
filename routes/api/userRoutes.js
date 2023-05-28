// TODO: Import Dependencies
const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
  } = require('../../controllers/userController');
  
// ------------------------------------------
// GIVEN: --> /api/users

// TODO: GET route to GET ALL USERS 
router.route('/').get(getUsers);

// TODO: GET route to GET A SINGLE USER by its '_id' with populated thought and friend data
router.route('/:userId').get(getSingleUser);

// TODO: POST route to CREATE A NEW USER
router.route('/').post(createUser);




// -------------------------------------------
// TODO: Export
module.exports = router;