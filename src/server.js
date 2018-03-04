'use strict';

const Hapi = require('hapi');
const APIPath = require('./app/Routing/routing');
var config = require('./config');
var os = require('os');
const Path = require('path');
const Hoek = require('hoek');

// Create a server with host and port
const server = Hapi.Server({
    host: 'localhost',
    port: 8082
});
async function liftOff(){
    await server.register({
        plugin: require('vision')
    });
    await server.register({
        plugin: require('inert')
    });
    // Add the route

    server.route(APIPath);
    server.views({
        engines: {
            ejs: require('ejs')
        },
        relativeTo: __dirname,
        path: './app/View'
    });

}
// Define async function to start server

async function start(){
    try {
        await server.start();
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at: ', server.info.uri);
    console.log('Environment: ', config.get('env'));
    console.log('ON: ', os.hostname());
};


// Call start function
start();

// Because we use hapi v17, we need to await the asynchronous plugin registration process.
liftOff();