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
router.route('/').get(getThoughts);

// TODO: GET route to GET A SINGLE THOUGHT by its '_id' 
router.route('/:thoughtId').get(getSingleThought);

// TODO: POST route to CREATE A NEW THOUGHT (don't forget to push the created thought's '_id' to the associated user's thoughts array field)
router.route('/').post(createThought);

// TODO: PUT route to UPDATE A THOUGHT by its '_id'
router.route('/:thoughtId').put(updateThought);

// TODO: DELETE route to REMOVE A THOUGHT by its '_id'
router.route('/:thoughtId').delete(deleteThought);




// -------------------------------------------
// GIVEN: --> /api/thoughts/:thoughtId/reactions

// TODO: POST route to CREATE (add) A REACTION stored in a single thought's 'reactions' array field
router.route('/:thoughtId/reactions').post(addReaction);

// TODO: DELETE route to PULL & REMOVE A REACTION by the reaction's 'reactionId' value
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);



// -------------------------------------------
// TODO: Export
module.exports = router;