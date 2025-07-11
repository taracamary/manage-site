/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var FastParse = require("fastparse");

var AttributesParser = function () {
	const processMatch = function(match, strUntilValue, name, value, index) {
		if(!this.isRelevantTagAttr(this.currentTag, name)) return;
		this.results.push({
			start: index + strUntilValue.length,
			length: value.length,
			value: value
		});
	};

	var fastParse = new FastParse({
		outside: {
			"<!--.*?-->": true,
			"<![CDATA[.*?]]>": true,
			"<[!\\?].*?>": true,
			"<\/[^>]+>": true,
			"<([a-zA-Z\\-:]+)\\s*": function(match, tagName) {
				this.currentTag = tagName;
				return "inside";
			}
		},
		inside: {
			"\\s+": true, // eat up whitespace
			">": "outside", // end of attributes
			"(([0-9a-zA-Z\\-:]+)\\s*=\\s*\")([^\"]*)\"": processMatch,
			"(([0-9a-zA-Z\\-:]+)\\s*=\\s*\')([^\']*)\'": processMatch,
			"(([0-9a-zA-Z\\-:]+)\\s*=\\s*)([^\\s>]+)": processMatch
		}
	});

	this.parse = (html, isRelevantTagAttr) => {
		return fastParse.parse("outside", html, {
			currentTag: null,
			results: [],
			isRelevantTagAttr: isRelevantTagAttr
		}).results.reverse();
	};
};

module.exports = AttributesParser;