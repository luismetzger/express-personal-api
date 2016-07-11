'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var sortAnswers = function(a, b) {
    if(a.votes === b.votes) {
        return b.updatedAt - a.updatedAt;
    }
    return b.votes - a.votes;
}

var StatusSchema = new Schema({
    text: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    votes: {type: Number, default: 0}
});

var DestinationSchema = new Schema({
  city: String,
  country: String,
  status: [StatusSchema]
});
DestinationSchema.method('update', function(updates, callback) {
    Object.assign(this, updates, {updatedAt: new Date()});
    this.parent().save(callback);
})
DestinationSchema.method('vote', function(vote, callback) {
    if(this.vote === 'up') {
        this.votes += 1;
    } else {
        this.votes -= 1;
    }
    this.parent().save(callback);
});
DestinationSchema.pre('save', function(next) {
    this.status.sort(sortAnswers);
    next();
});

var Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;
