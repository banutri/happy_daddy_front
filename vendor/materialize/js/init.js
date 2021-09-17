(function($){
  $(function(){

    $('.sidenav').sidenav();
    

    $('.carousel.carousel-slider').carousel({
      indicators:true,
      fullWidth:true,
      dist:-100,
      padding:0,
      
    });

    

    setInterval(function(){
      $('.carousel.carousel-slider').carousel('next');
      console.log('ilih');
    },5000);

  }); // end of document ready
})(jQuery); // end of jQuery name space

