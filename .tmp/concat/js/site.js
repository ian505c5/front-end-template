var consoleFix = (function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
    return;
}());
var NeboDropdown = (function(){

	return {
		toggle: function(target){
			$(target).slideToggle();
		}
	};
}());

var NavEvents = (function(){



	return {
		addDropdown: function(target){
			$(target).click(function(){
				Nebo.toggle();
			});
		}
	};

}());
