var app = require("../../app");

module.exports = function() {
	var chunksGraph = require("../../graphs/chunks");
	document.title = "chunks";
	$(".page").html(require("./chunks.jade")({
		stats: app.stats
	}));
	chunksGraph.show();
	return function() {
		chunksGraph.hide();
	}
};