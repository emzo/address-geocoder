(function($){
        
	var options = {
		map: "#geocodepreview",
		markerOptions: {
			draggable: true
		}
	};

	$("#martygeocoderaddress").geocomplete(options);

	$("#geocode").click(function(){
		$("#martygeocoderaddress").trigger("geocode");
	});

})(jQuery);
