'use strict';
const CONFIG = require('../../../src/config');
class Util{
    constructor(){

    }
    baseURL (){
        return CONFIG.get('http.scheme') + CONFIG.get('http.host') + CONFIG.get('http.port');
    }
}

module.exports = new Util();
