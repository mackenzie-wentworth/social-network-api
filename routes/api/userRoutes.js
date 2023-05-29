// TODO: Import Dependencies
const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend
  } = require('../../controllers/userController');
  
// ------------------------------------------
// GIVEN: --> /api/users

// TODO: GET route to GET ALL USERS 
router.route('/').get(getUsers);

// TODO: GET route to GET A SINGLE USER by its '_id' with populated thought and friend data
router.route('/:userId').get(getSingleUser);

// TODO: POST route to CREATE A NEW USER
router.route('/').post(createUser);

// TODO: PUT route to UPDATE USER by its '_id'
router.route('/:userId').put(updateUser);

// TODO: DELETE route to REMOVE USER by its '_id'
// BONUS: REMOVE a user's associated thoughts when deleted 
router.route('/:userId').delete(deleteUser);

// ------------------------------------------
// GIVEN: --> /api/users/:userId/friends/:friendId

// TODO: POST route to ADD A NEW FRIEND to a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend);


// -------------------------------------------
// TODO: Export
module.exports = router;