// TODO: Import Dependencies
const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
  } = require('../../controllers/userController');
  
// ------------------------------------------
// GIVEN: --> /api/users

// TODO: GET route to GET ALL USERS 

// TODO: GET route to GET A SINGLE USER by its '_id' with populated thought and friend data

// TODO: POST route to CREATE A NEW USER

// TODO: PUT route to UPDATE USER by its '_id'

// TODO: DELETE route to REMOVE USER by its '_id'
// BONUS: REMOVE a user's associated thoughts when deleted 




// ------------------------------------------
// GIVEN: --> /api/users/:userId/friends/:friendId

// TODO: POST route to ADD A NEW FRIEND to a user's friend list

// TODO: DELETE route to REMOVE A FRIEND from a user's friend list




// -------------------------------------------
// TODO: Export
module.exports = router;