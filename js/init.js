(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('nav').pushpin({ top: $('nav').offset().top });

  }); // end of document ready
})(jQuery); // end of jQuery name space


	   	if($('#night_mode').is(':checked'))
   	 	{
   	 		//bod.className = "dark white-text";
   	 		index_banner.className = "parallax-container";
   	 		n_banner.src="img/name_banner_night.png" ;
   	 		banner_img.src="img/banner_night.jpg";
   	 		bod.className = "night"
   	 	}
   	 	else
   	 	{
   	 		//bod.className = "white black-text";
   	 		index_banner.className = "parallax-container-day";
   	 		n_banner.src="img/name_banner_day.png" ;
   	 		banner_img.src="img/banner_day.jpg";
   	 		bod.className = ""
   	 	}

   	 	if($('#night_mode').is(':checked'))
   	 		$('#night_mode2').prop('checked',true);
   	 	else
   	 		$('#night_mode2').prop('checked',false);

   	 	if($('#night_mode2').is(':checked'))
   	 		$('#night_mode').prop('checked',true);
   	 	else
   	 		$('#night_mode').prop('checked',false);

    $('#night_mode').click(function() {
    //alert("Checkbox state (method 2) = " + $('#night_mode').is(':checked'));
   	 	if($('#night_mode').is(':checked'))
   	 	{
   	 		//bod.className = "dark white-text";
   	 		index_banner.className = "parallax-container";
   	 		n_banner.src="img/name_banner_night.png" ;
   	 		banner_img.src="img/banner_night.jpg";
   	 		//check other checkbox
   	 		$('#night_mode2').prop('checked',true);
   	 		bod.className = "night"
   	 	}
   	 	else
   	 	{
   	 		//bod.className = "white black-text";
   	 		index_banner.className = "parallax-container-day";
   	 		n_banner.src="img/name_banner_day.png" ;
   	 		banner_img.src="img/banner_day.jpg";
   	 		$('#night_mode2').prop('checked',false);
   	 		bod.className = ""
   	 	}
	});


    $('#night_mode2').click(function() {
    //alert("Checkbox state (method 2) = " + $('#night_mode').is(':checked'));
   	 	if($('#night_mode2').is(':checked'))
   	 	{
   	 		//bod.className = "dark white-text";
   	 		index_banner.className = "parallax-container";
   	 		n_banner.src="img/name_banner_night.png" ;
   	 		banner_img.src="img/banner_night.jpg";
   	 		$('#night_mode').prop('checked',true);
   	 		bod.className = "night"
   	 	}
   	 	else
   	 	{
   	 		//bod.className = "white black-text";
   	 		index_banner.className = "parallax-container-day";
   	 		n_banner.src="img/name_banner_day.png" ;
   	 		banner_img.src="img/banner_day.jpg";
   	 		//check other checkbox
   	 		$('#night_mode').prop('checked',false);
   	 		bod.className = ""
   	 	}
	});