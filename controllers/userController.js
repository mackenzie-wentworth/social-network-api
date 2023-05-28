// TODO: Import Dependencies (import models and mongoose)
const { User, Thought } = require('../models');

// ------------------------------------------
const userController = {

    // TODO: GET ALL USERS --> '/'
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then((users) => {
                res.json(users);
              })
            .catch((err) => {
                console.error({ message: err });
                return res.status(500).json(err);
            });
    },
    // TODO: GET A SINGLE USER by its '_id' with populated thought and friend data --> '/:userId'
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Sorry, no existing user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
              });
    },

    // TODO: CREATE A NEW USER --> '/'
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },

    // TODO: UPDATE USER by its '_id' --> '/:userId'


    // TODO: DELETE USER by its '_id' --> '/:userId'
    // BONUS: REMOVE a user's associated thoughts when deleted 





    // ------------------------------------------
    // TODO: ADD A NEW FRIEND to a user's friend list --> '/:userId/friends/:friendId'


    // TODO: REMOVE A FRIEND from a user's friend list --> '/:userId/friends/:friendId'


}

// ------------------------------------------
// TODO: Export
module.exports = userController;