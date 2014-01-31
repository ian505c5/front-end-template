var NavEvents = (function(){



	return {
		addDropdown: function(target){
			$(target).click(function(){
				Nebo.toggle();
			});
		}
	};

}());
