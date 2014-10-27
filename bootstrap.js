
// Always load the Pace script & style
alchemy.hawkejs.on({type: 'viewrender', status: 'begin', client: false}, function onBegin(viewRender) {

	viewRender.script('pace/pace');
	viewRender.style('pace/flat-top');

});