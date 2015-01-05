var app = require("../../app");

module.exports = function(id) {
	var modulesGraph = require("../../graphs/modules");
	id = parseInt(id, 10);
	document.title = "chunk " + id;
	$(".page").html(require("./chunk.jade")({
		stats: app.stats,
		id: id,
		chunk: app.mapChunks[id]
	}));
	modulesGraph.show();
	modulesGraph.setActiveChunk(id);
	return function() {
		modulesGraph.hide();
	}
};