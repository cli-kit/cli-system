var expect = require('chai').expect;
var sys = require('../..');

describe('cli-system:', function() {

  it('should have built in middleware properties', function(done) {
    expect(sys.help).to.be.a('function');
    expect(sys.version).to.be.a('function');
    expect(sys.standard).to.be.a('function');
    expect(sys.ConverterMap).to.be.a('function');
    done();
  });

  it('should return standard middleware array', function(done) {
    var list = sys.standard();
    expect(list).to.be.an('array');
    done();
  });

  it('should include all standard middleware', function(done) {
    var middleware = sys.include();
    expect(middleware.map).to.be.an('object');
    expect(middleware.list).to.be.an('array');
    expect(middleware.keys).to.be.an('array');
    done();
  });

  it('should assign middleware as properties (legacy)', function(done) {
    var middleware = sys.include(true);
    expect(middleware.map).to.be.an('object');
    expect(middleware.list).to.be.an('array');
    expect(middleware.keys).to.be.an('array');

    expect(sys.error).to.be.a('function');
    expect(sys.empty).to.be.a('function');
    done();
  });
})
