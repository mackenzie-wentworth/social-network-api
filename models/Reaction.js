// TODO: Import Dependencies
const { Schema, Types } = require('mongoose');
const moment = require('moment');

// ** SCHEMA ONLY ** This will not be a model, but rather will be used as the reaction field's subdocument schema in the 'Thought' model

// TODO: Construct a new instance of the schema class for 'reactionSchema'
const reactionSchema = new Schema ()

// TODO: Export 'reactionSchema'
module.exports = reactionSchema;
