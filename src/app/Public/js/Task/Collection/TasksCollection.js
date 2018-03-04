var backbone = require('backbone');
var Task = require('../Model/Task');
var TasksCollection = backbone.Collection.extend({

    model: Task,

    url: '/tasks'
});
module.exports = TasksCollection;