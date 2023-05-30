// TODO: Import Dependencies
const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController');
  
// TODO: GET route to GET ALL USERS 
// TODO: POST route to CREATE A NEW USER
router.route('/').get(getUsers).post(createUser);

// TODO: GET route to GET A SINGLE USER by its '_id' with populated thought and friend data
// TODO: PUT route to UPDATE USER by its '_id'
// TODO: DELETE route to REMOVE USER by its '_id'
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// TODO: POST route to ADD A NEW FRIEND to a user's friend list
// TODO: DELETE route to REMOVE A FRIEND from a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// TODO: Export
module.exports = router;