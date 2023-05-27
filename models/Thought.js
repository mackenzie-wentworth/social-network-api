// TODO: Import Dependencies
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// TODO: Construct a new instance of the schema class for 'thoughtSchema'
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlenghth: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a'),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        // Allow modifications to data of the document with 'getters'
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// TODO: Create a virtual called 'reactionCount' that retrieves the length of thought's 'reactions' array field on query
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    });

// TODO: Using mongoose.model() to compile a model based on the schema 'thoughtSchema'
const Thought = model('Thought', thoughtSchema);

// TODO: Export 'Thought' model
module.exports = Thought;