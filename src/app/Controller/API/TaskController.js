'use strict';
var taskService = require('../../Service/TaskService');
class TaskController {
    constructor(){

    }
    getTasks(request, reply){
        return taskService.getTasks();
    }
}

module.exports = new TaskController();