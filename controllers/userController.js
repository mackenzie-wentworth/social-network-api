// TODO: Import Dependencies (import models and mongoose)
const { User, Thought } = require('../models');

const userController = {

    // TODO: GET ALL USERS --> '/'
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then((users) => 
                res.json(users))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // TODO: GET A SINGLE USER by its '_id' with populated thought and friend data --> '/:userId'
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Sorry, no existing user with that ID!' })
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
            .then((user) =>
                res.json(user))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: UPDATE USER by its '_id' --> '/:userId'
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            // Update --> use $set operator 
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Sorry, no existing user with that ID!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: DELETE USER by its '_id' --> '/:userId'
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: 'Sorry, no existing user with that ID!' });
                }
                // BONUS: REMOVE a user's associated thoughts when deleted 
                return Thought.deleteMany(
                    { _id: { $in: user.thoughts } }
                );
            })
            .then(() => {
                res.json({ message: 'User and associated thoughts have been deleted!' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // ------------------------------------------
    // TODO: ADD A NEW FRIEND to a user's friend list --> '/:userId/friends/:friendId'
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            // Add --> use $addToSet operator 
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Sorry, no existing user with that ID!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: REMOVE A FRIEND from a user's friend list --> '/:userId/friends/:friendId'
    removeFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            // Remove --> use $pull operator 
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Sorry, no existing user with that ID!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

// TODO: Export
module.exports = userController;