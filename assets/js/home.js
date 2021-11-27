


// Add to Cart
  $('.add-to-cart').on('click', function () {
    let productId = $(this).data('product-id');
    console.log('keranjang id barang '+productId);
  });
// End Add to Cart

// Product Click
  $('.card-product').on('click', function () {
    let productId = $(this).data('product-id');
    window.open("../../product_detail.html",'_self');
  });
// End Product click
