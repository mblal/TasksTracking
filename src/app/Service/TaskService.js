var  httpClient = require('request');
var stub = {
    tasks: require('../Stub/tasks')
}
class TaskService{

    constructor(){
    }

    getTasks(){
         return stub.tasks;
    }
}
module.exports = new TaskService();