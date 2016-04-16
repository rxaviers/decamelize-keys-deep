var expect = require("chai").expect;
var decamelizeKeysDeep = require("../index");

describe("decamelizeKeysDeep", function() {
  var extract;

  it("should deeply decamelize the keys of a JSON object", function() {
    var aDate = new Date(2016, 3, 15);
    var json = {
      unicornRainbow: {
        fooBar: 1,
        aDate: aDate,
        anArray: [1, 2, {fooBar: 3}]
      }
    };
    expect(decamelizeKeysDeep(json)).to.be.deep.equal({
      unicorn_rainbow: {
        foo_bar: 1,
        a_date: aDate,
        an_array: [1, 2, {foo_bar: 3}]
      }
    });
  });

  it("should raise if decamelized key would overwrite existing key of the JSON object", function() {
    var json = {unicornRainbow: {fooBar: 1, foo_bar: 2}};
    expect(function() {
      decamelizeKeysDeep(json);
    }).to.throw();

    json = {foo: 1}
    expect(function() {
      decamelizeKeysDeep(json);
    }).to.not.throw();
  });

});

