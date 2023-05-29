// TODO: Import Dependencies
const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought
  } = require('../../controllers/thoughtController');

// ------------------------------------------
// GIVEN: --> /api/thoughts

// TODO: GET route to GET ALL THOUGHTS 
router.route('/').get(getThoughts);

// TODO: GET route to GET A SINGLE THOUGHT by its '_id' 
router.route('/:thoughtId').get(getSingleThought);

// TODO: POST route to CREATE A NEW THOUGHT (don't forget to push the created thought's '_id' to the associated user's thoughts array field)
router.route('/').post(createThought);



// -------------------------------------------
// TODO: Export
module.exports = router;