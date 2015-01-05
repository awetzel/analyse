var app = require("../../app");

module.exports = function(id) {
	var modulesGraph = require("../../graphs/modules");
	id = parseInt(id, 10);
	var m = app.mapModulesUid[id];
	document.title = "module " + m.id;
	$(".page").html(require("./module.jade")({
		stats: app.stats,
		id: id,
		module: m,
		issuer: app.mapModulesUid[m.issuerUid]
	}));
	modulesGraph.show();
	modulesGraph.setActiveModule(id);
	return function() {
		modulesGraph.hide();
	}
};