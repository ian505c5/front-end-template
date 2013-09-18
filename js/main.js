require.config({
	// Automatic cache busting during development
	urlArgs: "bust=" + (new Date()).getTime(),

	paths: {
		jquery: '../components/jquery/jquery.min',
		utils: 'utils'
	}
});

require(['app'], function(App) {
	App.initialize();
});
