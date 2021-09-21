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


    $('.cart-btn').on('click',function(){
      console.log('keranjang');
    });

    $('.product-click').on('click',function(){
      console.log('produk');
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

