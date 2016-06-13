'use strict';

var psc = require('../lib');
var path = require('path');

describe('proxy-sinon-chai', () => {
  var context;

  beforeEach(() => {
    context = psc.proxyquire(path.join(__dirname, 'fixture.js'), {
      fs: {
        readFileSync: () => {
          return 'someContent';
        }
      }
    });
  });

  it('should have unit test!', () => {
    psc.expect(context()).to.be.equal('someContent');
  });
});
