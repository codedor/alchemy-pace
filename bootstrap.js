
var scriptpath = '/public/pace/pace.js',
    csspath    = '/public/pace/pace-flash.css';

alchemy.sputnik.beforeSerial('startServer', function(callback) {

	// Make sure the i18n drone runs
	alchemy.hawkejs.afterPayload(function(next, payload) {
		
		// Only do this on new pages
		if (!payload.hawkejs.ajax) {

			// Make sure the file isn't already loaded
			if (!payload.request.files[scriptpath]) {
				payload.request.files[scriptpath] = true;
			
				// Create an alias to the scripts object
				var s = payload.request.tags;
				
				s[scriptpath] = {
					type: 'script',
					path: scriptpath,
					destination: 'head'
				};

				s[csspath] = {
					type: 'style',
					path: csspath,
					destination: 'head'
				};
			}
		}

		next();
	});

	callback();
});