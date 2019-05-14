"use strict";

const fs = require("fs");
const path = require("path");
const esformatter = require("esformatter");
const plugin = require("../");
const expect = require("chai").expect;

function readFile(folder, name) {
  const filePath = path.join("./test", folder, name);
  return fs.readFileSync(filePath).toString();
}

describe("esformatter-couchapp", function() {
  before(function() {
    esformatter.register(plugin);
  });

  describe("ignore anon function at start", function() {
    var files = fs.readdirSync("./test/fixtures/");
    files.forEach(function(file) {
      if (/^\./.test(file)) return;
      it("should transform fixture " + file + " and be equal expected file", function() {
        var input = readFile("fixtures", file);
        var actual = esformatter.format(input);
        var expected = readFile("expected", file);
        expect(actual).to.equal(expected);
      });
    });
  });

});
