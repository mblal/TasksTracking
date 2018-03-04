var convict = require('convict');
var path = require('path');

var environments = ['dev','test','integ','prod',];
// Define a schema

var config = convict({
    env: {
        doc: 'The application environment',
        format: environments,
        default: 'dev',
        env: "NODE_ENV"

    },
    webServices:{
        tasksAPI:{
            doc: 'REST API to get all tasks',
            format: String,
            default: null
        }
    },
    static_cache_max_age: {
        doc: 'Cache-Control HTTP header in milliseconds',
        format: Number,
        default: 24 * 60 * 60 * 1000 // milliseconds
    },
    http:{
        scheme: {
            doc: 'Le protocole de communication',
            format: String,
            default: null
        },
        host:{
            doc: 'L\'adresee de l\'hote',
            format: String,
            default: null
        },
        port:{
            doc: 'Le numero de l\'application sur le reseau',
            format:String,
            default: null
        }
    }
});

// Load configuration dependent environment
var env = config.get('env');
config.loadFile(
    path.join(__dirname, '/app/Config/config_' + env + '.json')
);

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;