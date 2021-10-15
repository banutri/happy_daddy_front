$(document).ready(function () {

// Search bar
  $('#modalSearch').modal({
    dismissible: false,
    onOpenEnd:function(){
      $('input[name=searchQuery]').focus();
    },
    onCloseEnd:function(){
      $('input[name=searchQuery]').val("");
    },
    
  });

  $('#searchBarForm').on('submit',function(event){
    event.preventDefault();
    let searchQuery = $('input[name=searchQuery]').val();
    console.log(searchQuery);
  })

  $('.btn-submit-searchquery').on('click',function(){
    $('#searchBarForm').submit();
  })
// End search bar

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
    console.log('Id barang = '+productId);
  });
// End Product click

// Sidenav Trigger
  $('.sidenav-trigger-custom').on('click',function(){
    $('.sidenav').sidenav('open');
  });
// End Sidenav Trigger



// ========== Init Functions ============ //

// Sidenavabr
$('.sidenav').sidenav();



// Tooltip
$('.tooltipped').tooltip();

// Dropdown
$(".dropdown-trigger").dropdown();

// ========== End Init Functions ========= //

});

