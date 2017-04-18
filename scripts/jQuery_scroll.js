$(document).ready(function() {
  //Scroll function for header links
  $(document).on('click', 'a[href^="#"]', function(e) {
  	var id = $(this).attr('href');
  	var $id = $(id);
  	if($id.length === 0)
  	  return;
  	//Prevent standard navigation
  	e.preventDefault();
  	var pos = $id.offset().top;
  	//Scroll!
  	$('body, html').animate({scrollTop: pos});
  });
});