// TODO: Import Dependencies (import models and mongoose)
const { User, Thought } = require('../models');

const thoughtController = {

    // TODO: GET ALL THOUGHTS --> '/'
    getThoughts(req, res) {
        Thought.find()
            // sort date by descending order
            .sort({ createdAt: -1 })
            .then((thoughts) =>
                res.json(thoughts))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: GET A SINGLE THOUGHT by its '_id' --> '/:thoughId'
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Sorry, no existing thought with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: CREATE A NEW THOUGHT
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    // Push the created thought's '_id' to the associated user's thoughts array field --> use $push operator
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Error! Thought created, except no existing user with that ID!' })
                    : res.json({ message: 'Thought has successfully been created!' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: UPDATE A THOUGHT by its '_id' --> '/:thoughtId'
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Sorry, no existing thought with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: DELETE A THOUGHT by its '_id' --> '/:thoughtId'
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) => {
                if (!thought) {
                    return res.status(404).json({ message: 'Sorry, no existing thought with that ID!' });
                }
                // Update the user's 'thoughts' field when thought is deleted (remove specified thoughtId from user)
                return User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    // Remove --> use $pull operator 
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                );
            })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Error! Thought deleted, except no existing user with that ID!' })
                    : res.json({ message: 'Thought has successfully been deleted!' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // ------------------------------------------
    // TODO: CREATE (ADD) A REACTION --> '/:thoughtId/reactions'
    addReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            // Add --> use $addToSet operator (stored in a single thought's 'reactions' array field)
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Sorry, no existing thought with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // TODO: PULL & REMOVE A REACTION by the reaction's 'reactionId' value --> '/:thoughtId/reactions/:reactionId'
    removeReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            // Remove --> use $pull operator 
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Sorry, no existing thought with that ID!' })
                    : res.json({ message: 'Reaction has successfully been deleted!' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

// TODO: Export
module.exports = thoughtController;