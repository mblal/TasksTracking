var Backbone = require('backbone');
var TasksCollection = require('../Collection/TasksCollection');
var _ = require('underscore');
var Handlebars = require('handlebars/runtime')['default'];
var HandlebarsHelpers = require('../../Helpers/handlebars-helpers');

var Tasks = Backbone.View.extend({

    // assign TasksCollection to the collection keyword
    collection: new TasksCollection(),

    // the DOM element of current template in which the current view will inject the data.
    el: '#all-tasks-area',

    // Template to inject in the el DOM element.
    template: require('../Template/tasks-template.html'),

    initialize: function(){
        Handlebars.registerHelper('or', HandlebarsHelpers.prototype.or);
        Handlebars.registerHelper('compare', HandlebarsHelpers.prototype.compare);
        var self = this;
        this.collection.fetch({
            success: function () {
                self.render();
            },
            error: function () {

            }
        });

    },
    render: function () {
        var self = this;
        var tasksCollection = _.map(this.collection.models, function (task, index) {
            var position = index + 1;
            var scope = index / 3;
            scope = Math.trunc(scope);
            if (position ===  1 + (3 * scope))
                task.attributes.color = 'one';
            if (position ===  2 + (3 * scope))
                task.attributes.color = 'two';
            if (position ===  3 + (3 * scope))
                task.attributes.color = 'three';
            return task.attributes;
        });
        this.$el.html(this.template({tasks: tasksCollection}));
    }
});
module.exports = Tasks;