var TaskController = require('../Controller/API/TaskController');
var DefaultController = require('../Controller/DefaultController');
var config = require('../../config')
module.exports = [
    {
    /*----------------- Classical controllers ----------------------------*/
    method: 'GET',
    path: '/',
    handler: DefaultController.indexAction
},
    {
    /*----------------  API controllers ----------------------------------*/
    method: 'GET',
    path: '/tasks',
    handler: TaskController.getTasks
},
    {
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: 'app/Dist',
                listing: true
            }
        }
        /*config: {
            cache: {
                expiresIn: config.get('static_cache_max_age'),
                privacy: 'private'
            }
        }*/
 }];