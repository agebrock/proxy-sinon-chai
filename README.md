# proxy-sinon-chai [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Testsuite for the lazy once..

## Installation

```sh
$ npm install --save proxy-sinon-chai
```

## Usage

```js
var psc = require('proxy-sinon-chai');

// This is just what you expect - i hope ;)
var proxyquire = psc.proxyquire;
var sinon = psc.sinon;
var expect = psc.expect;
var should = psc.should;
var assert = psc.assert;
```
## License

MIT © [Christoph Hagenbrock](agebrock.com)


[npm-image]: https://badge.fury.io/js/proxy-sinon-chai.svg
[npm-url]: https://npmjs.org/package/proxy-sinon-chai
[travis-image]: https://travis-ci.org/agebrock/proxy-sinon-chai.svg?branch=master
[travis-url]: https://travis-ci.org/agebrock/proxy-sinon-chai
[daviddm-image]: https://david-dm.org/agebrock/proxy-sinon-chai.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/agebrock/proxy-sinon-chai
[coveralls-image]: https://coveralls.io/repos/github/agebrock/proxy-sinon-chai/badge.svg
[coveralls-url]: https://coveralls.io/r/agebrock/proxy-sinon-chai
