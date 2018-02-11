Videos = new Meteor.Collection('videos');

VideoSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    URL: {
        type: String,
        label: "URL"
    },

    desc: {
        type: String,
        label: "Description"
    },

    author: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date()
        }
    }
});

Videos.attachSchema(VideoSchema);