var decamelize = require("decamelize");
var mapObj = require("map-obj");

module.exports = function(obj, options) {
  return JSON.parse(JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && !Array.isArray(value)) {
      value = mapObj(value, function(key, value) {
        var newKey = decamelize(key, options);
        if (newKey in value) {
          throw new Error("Duplicate " + newKey);
        }
        return [key, value];
      });
    }
    return value;
  }));
}
