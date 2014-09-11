
var scriptpath = '/public/pace/pace.js',
    csspath    = '/public/pace/pace-flash.css';

// Always load the Pace script & style
alchemy.hawkejs.on({type: 'viewrender', status: 'begin', client: false}, function onBegin(viewRender) {

	viewRender.script(scriptpath);
	viewRender.style(csspath);

});