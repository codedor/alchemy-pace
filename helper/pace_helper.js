return;
module.exports = function paceHelpers(hawkejs) {

	var wait, restart;

	restart = function restart() {
		Pace.restart();
	};
	
	/**
	 * Restart the Pace spinner on the client side
	 * when a new ajax request is made
	 *
	 * @author        Jelle De Loecker   <jelle@kipdola.be>
	 * @since         0.0.1
	 * @version       0.0.1
	 */
	hawkejs.event.on('ajaxbegin', function RestartPace() {

		// If another restart is already scheduled, reset it
		if (wait) {
			clearTimeout(wait);
		}

		// Schedule a new pace restart, but wait 100ms first
		wait = setTimeout(restart, 100);
	});

	/**
	 * Stop the Pace spinner on the client side
	 * when the ajax navigation request is finished
	 *
	 * @author        Jelle De Loecker   <jelle@kipdola.be>
	 * @since         0.0.1
	 * @version       0.0.1
	 */
	hawkejs.event.on(['renderend', 'ajaxdownloadstop', 'ajaxdownload'], function StopPace() {

		if (wait) {
			clearTimeout(wait);
		}

		Pace.stop();
	});
};