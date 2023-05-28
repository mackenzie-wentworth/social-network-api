// TODO: Import Dependencies
const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction,
  } = require('../../controllers/thoughtController');

// ------------------------------------------
// GIVEN: --> /api/thoughts

// TODO: GET route to GET ALL THOUGHTS 

// TODO: GET route to GET A SINGLE THOUGHT by its '_id' 

// TODO: POST route to CREATE A NEW THOUGHT (don't forget to push the created thought's '_id' to the associated user's thoughts array field)

// TODO: PUT route to UPDATE A THOUGHT by its '_id'

// TODO: DELETE route to REMOVE A THOUGHT by its '_id'





// -------------------------------------------
// GIVEN: --> /api/thoughts/:thoughtId/reactions

// TODO: POST route to CREATE (add) A REACTION stored in a single thought's 'reactions' array field

// TODO: DELETE route to PULL & REMOVE A REACTION by the reaction's 'reactionId' value




// -------------------------------------------
// TODO: Export
module.exports = router;