
// Carousel
$('.carousel.carousel-slider').carousel({
    indicators: true,
    fullWidth: true,
    dist: -100,
    padding: 0,

  });

  setInterval(function () {
    $('.carousel.carousel-slider').carousel('next');
    console.log('ilih');
  }, 5000);

// End Carousel

// Add to Cart
  $('.add-to-cart').on('click', function () {
    let productId = $(this).data('product-id');
    console.log('keranjang id barang '+productId);
  });
// End Add to Cart

// Product Click
  $('.card-product').on('click', function () {
    let productId = $(this).data('product-id');
    window.open("../../product_detail.html",'_blank');
  });
// End Product click
