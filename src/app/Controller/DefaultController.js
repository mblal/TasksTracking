'use strict';
const utils = require('../Utils/Util')
class TaskController {
    constructor(){

    }
    indexAction(request, reply){
        return reply.view('index.ejs', {baseURL: utils.baseURL()});
    }
}

module.exports = new TaskController();