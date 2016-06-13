'use strict';
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var proxyquire = require('proxyquire');
chai.use(sinonChai);

exports.proxyquire = proxyquire;
exports.sinon = sinon;
exports.expect = chai.expect;
exports.should = chai.should;
exports.assert = chai.assert;
