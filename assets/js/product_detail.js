$(document).ready(function () {

    // Product Carousel
    $('#right-btn').on('click',function(){
        $('.product-image-slider-inner-container').animate({
            scrollLeft:"+=90",
        })
        console.log('ilih kntl');
    });
    $('#left-btn').on('click',function(){
        $('.product-image-slider-inner-container').animate({
            scrollLeft:"-=90",
        })
        console.log('ilih kntl');
    });
    // End product carousel

    // Input Lokasi AJAX Request
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //time in ms
    var $input = $('.inputLokasi');

    //on keyup, start the countdown
    $input.on('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });

    //on keydown, clear the countdown 
    $input.on('keydown', function () {
    clearTimeout(typingTimer);
    });

    //user is "finished typing," do something
    function doneTyping () {
        let searchQuery = $($input).val();
            
        if(searchQuery.length>=4){
            console.log(searchQuery);
            let data = {
                keyword:searchQuery,
            }
            $.ajax({
                type: "GET",
                url: "https://content-main-api-production.sicepat.com/public/delivery-fee/destination/",
                data: data,
                dataType: "JSON",
                success: function (response) {
                    console.log(response.sicepat.results);
                    response = response.sicepat.results;
                    $('.listLokasi').html('');
                    $.each(response, function (i, v) { 
                         $('.listLokasi').append(`
                         <a href="#!" class="btn-flat white black-text waves-effect waves-dark listLokasiItems" data-destination-code="`+v.destination_code+`">`+v.subdistrict+`, `+v.city+`, `+v.province+`<i class="material-icons right">arrow_forward_ios</i> </a>
                         `);
                    });
                }
            });
        }
        else if(searchQuery.length===0){
            $('.listLokasi').html('');
        }
        
    }

    // Onclick listLokasiItems
    $('.listLokasi').on('click','.listLokasiItems',function(){
        let destination_code = $(this).data('destination-code');

        // parameter request ongkir
        data = {
            origin:"CGK",
            destination:destination_code,
            weight:0.5,
            p:20,
            l:10,
            t:10,
        }
        
        // request ongkir
        $.ajax({
            type: "post",
            url: "https://content-main-api-production.sicepat.com/public/delivery-fee/fare-non-international",
            data: data,
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                $('#modalPilihLokasi').modal('close');
            }
        });
   
    })

    // End Input Lokasi AJAX Request

    

    // Initialize Modal plihLokasi
    $('#modalPilihLokasi').modal();
    $('#modalPilihLokasi').modal({
        onCloseEnd:function(){
            $('.inputLokasi').val('');
            $('.listLokasi').html('');
        }
    });
    

});




// API get tariff ongkir
function get_tariff_ongkir(data){
    data = {
        origin:"CGK",
        destination:"SRG21602",
        weight:0.5,
        p:20,
        l:10,
        t:10,
    }
    $.ajax({
        type: "post",
        url: "https://content-main-api-production.sicepat.com/public/delivery-fee/fare-non-international",
        data: data,
        dataType: "JSON",
        success: function (response) {
            console.log(response);
        }
    });
}