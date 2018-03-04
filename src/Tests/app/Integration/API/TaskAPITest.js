const BASE_URL = require('../../../TEST_CONFIG').BASE_URL;
var supertest = require('supertest');
var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var sinon = require('sinon');

var httpClient = supertest.agent(BASE_URL);

describe('REST Task API test', function () {
   describe('getTasks API test', function(){
        it('Should return a set of tasks', function(done){
            httpClient.get('/tasks')
                .set('Accept', 'application/json')
                .expect('Content-Type','application/json; charset=utf-8')
                .expect(function (res) {
                    expect(res.body.length).to.equal(7);
                    res.body[0].should.have.property('id').equal('1');
                    res.body[0].should.have.property('description');
                    res.body[0].should.have.property('code');
                    res.body[0].should.have.property('start_date');
                    res.body[0].should.have.property('end_date');
                    res.body[0].should.have.property('start_hour');
                    res.body[0].should.have.property('end_hour');
                    res.body[0].should.have.property('status');
                })
                .expect(200, done)
        });
   });
});