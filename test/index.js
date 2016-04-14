var expect = require("chai").expect;
var decamelizeKeysDeep = require("../index");

describe("decamelizeKeysDeep", function() {
  var extract;

  it("should deeply decamelize the keys of a JSON object", function() {
    var json = {unicornRainbow: {fooBar: 1}};
    expect(decamelizeKeysDeep(json)).to.be.deep.equal({unicorn_rainbow: {foo_bar: 1}});
  });

  it("should raise if decamelized key would overwrite existing key of the JSON object", function() {
    var json = {unicornRainbow: {fooBar: 1, foo_bar: 2}};
    expect(function() {
      decamelizeKeysDeep(json);
    }).to.throw;
  });

});

