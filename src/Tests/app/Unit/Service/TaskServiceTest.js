var taskService = require('../../../../app/Service/TaskService');
var assert = require('assert');

describe('Task service test', function(){

    describe('getTasks Function', function(){
        it('Should return a list of tasks objects', function (done) {
            var tasks = taskService.getTasks();
            assert.equal(tasks.length, 7);
            done();
        });
    });
});