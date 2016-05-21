(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('nav').pushpin({ top: $('nav').offset().top });

  }); // end of document ready
})(jQuery); // end of jQuery name space


	var cur_mode = localStorage.getItem('site_mode');

	//check if site_mode was ever set previously
	if(!cur_mode)
	{
		localStorage.setItem('site_mode', 'night')
	}

	if(cur_mode === 'night')
	{
		$('#night_mode').prop('checked',false);
		$('#night_mode2').prop('checked',false);
	}
	else if(cur_mode === 'day')
	{
		$('#night_mode').prop('checked',true);
		$('#night_mode2').prop('checked',true);		
	}
	else
	{
		$('#night_mode').prop('checked',false);
		$('#night_mode2').prop('checked',false);
	}



	if($('#night_mode').is(':checked'))
	{
		//set to day mode
		   	 		//bod.className = "white black-text";
		index_banner.className = "parallax-container-day";
		n_banner.src="img/name_banner_day.png" ;
		banner_img.src="img/banner_day.jpg";
		my_pic.src="img/jip_small_day.jpg";
		bod.className = "day"
		localStorage.setItem('site_mode', 'day')
	}
	else
	{
		//set to day mode
		//bod.className = "dark white-text";
		index_banner.className = "parallax-container";
		n_banner.src="img/name_banner_night.png" ;
		banner_img.src="img/banner_night.jpg";
		my_pic.src="img/jip_small_night.jpg";
		bod.className = "night"
	}
	//set side_nav switch to match main nav switch
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
		//bod.className = "white black-text";
		index_banner.className = "parallax-container-day";
		n_banner.src="img/name_banner_day.png" ;
		banner_img.src="img/banner_day.jpg";
		my_pic.src="img/jip_small_day.jpg";
		$('#night_mode2').prop('checked',true);
		bod.className = "day"
		localStorage.setItem('site_mode', 'day')
	}
	else
	{
		   	 		//bod.className = "dark white-text";
		index_banner.className = "parallax-container";
		n_banner.src="img/name_banner_night.png" ;
		banner_img.src="img/banner_night.jpg";
		my_pic.src="img/jip_small_night.jpg";
		//check other checkbox
		$('#night_mode2').prop('checked',false);
		bod.className = "night"
		localStorage.setItem('site_mode', 'night')
	}
	});


	$('#night_mode2').click(function() {
	//alert("Checkbox state (method 2) = " + $('#night_mode').is(':checked'));
	if($('#night_mode2').is(':checked'))
	{
		//bod.className = "white black-text";
		index_banner.className = "parallax-container-day";
		n_banner.src="img/name_banner_day.png" ;
		banner_img.src="img/banner_day.jpg";
		my_pic.src="img/jip_small_day.jpg";
		//check other checkbox
		$('#night_mode').prop('checked',true);
		bod.className = "day"
		localStorage.setItem('site_mode', 'day')
	}
	else
	{
		//bod.className = "dark white-text";
		index_banner.className = "parallax-container";
		n_banner.src="img/name_banner_night.png" ;
		banner_img.src="img/banner_night.jpg";
		my_pic.src="img/jip_small_night.jpg";
		$('#night_mode').prop('checked',false);
		bod.className = "night"
		localStorage.setItem('site_mode', 'night')
	}
	});