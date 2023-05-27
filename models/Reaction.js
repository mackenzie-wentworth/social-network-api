// TODO: Import Dependencies
const { Schema, Types } = require('mongoose');
const moment = require('moment');

// ** SCHEMA ONLY ** This will not be a model, but rather will be used as the reaction field's subdocument schema in the 'Thought' model

// TODO: Construct a new instance of the schema class for 'reactionSchema'
const reactionSchema = new Schema (
    {
        reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId(),
        },
        reactionBody: {
          type: String,
          required: true,
          maxlength: 280,
        },
        username: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
        },
      },
      // Allow modifications to data of the document with 'getters'
      {
        toJSON: {
          getters: true,
        },
        id: false,
      }
)

// TODO: Export 'reactionSchema'
module.exports = reactionSchema;
