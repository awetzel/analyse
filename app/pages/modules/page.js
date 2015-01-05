var app = require("../../app");

module.exports = function() {
	var modulesGraph = require("../../graphs/modules");
	document.title = "modules";
	$(".page").html(require("./modules.jade")({
		stats: app.stats
	}));
	modulesGraph.show();
	modulesGraph.setNormal();
	return function() {
		modulesGraph.hide();
	}
};