module.exports = function paceHelper(Hawkejs, Blast) {

	if (Blast.isNode) {
		return;
	}

	// Attach the event listener once hawkejs object exists
	Blast.setImmediate(function() {
		hawkejs.scene.on({type: 'ajax', state: 'begin'}, function onAjax() {
			Pace.restart();
		});
	});
};