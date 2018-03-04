var backbone = require('backbone');
var TaskModel = backbone.Model.extend({

    toJSON: function () {
        console.log(this.attributes.description);
        return this.attributes.description
    }
});
module.exports = TaskModel;