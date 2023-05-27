// TODO: Import Dependencies
const { Schema, model } = require('mongoose');

// TODO: Construct a new instance of the schema class for 'userSchema'
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
    },
    {
        email: {
            type: String,
            unique: true,
            required: true,
            match: /.+\@.+\..+/,
        },
    },
    {
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
    },
    {
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        // Indicates that we want a virtual to be included with our response, overriding the default behavior (using toJSON)
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// TODO: Create a virtual called 'friendCount' that retrieves the length of the user's 'friends' array field on query
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
        return this.friends.length;
    });

// TODO: Using mongoose.model() to compile a model based on the schema 'userSchema'
const User = model('user', userSchema);

// TODO: Export 'User' model
module.exports = User;