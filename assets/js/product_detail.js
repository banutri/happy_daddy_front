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
                         <a href="#!" class="btn-flat white black-text waves-effect waves-dark listLokasiItems" data-destination-code="`+v.destination_code+`" data-destination-plain=" `+v.city+`, `+v.subdistrict+`">`+v.subdistrict+`, `+v.city+`, `+v.province+`<i class="material-icons right">arrow_forward_ios</i> </a>
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
        let destination_plain = $(this).data('destination-plain');
        // parameter request ongkir not yet done
        data = {
            origin:"CGK",
            destination:destination_code,
            weight:0.5,
            p:10,
            l:10,
            t:2,
        }
        
        // request ongkir
        $.ajax({
            type: "post",
            url: "https://content-main-api-production.sicepat.com/public/delivery-fee/fare-non-international",
            data: data,
            dataType: "JSON",
            success: function (response) {
                response = response.sicepat.results;
                console.log(response);

                let indexService;
                $.each(response, function (i, v) { 
                     if(v.service === "REG"){
                         indexService = i;
                     }
                });

                $('.tariffList').html('');
                $('.tariffList').html(`
                        <span style="font-weight: 500;">Rp `+number_comma(response[indexService].tariff)+`</span>
                        <span>| SiCepat Reguler (`+response[indexService].service+`)</span>
                        <span>(`+response[indexService].etd+`)</span>
                     `);

                $('#modalPilihLokasi').modal('close');
                $('.btn-pilihLokasi').html(``+destination_plain+` <i class="material-icons right">expand_more</i>`);
                $('.panel-ongkir').show();
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

// QTY
$(document).ready(function () {
    
    // btn-minus on click
    $('.qty-counter-items').on('click','.btn-minus',function(){
        console.log('isssslih\n');
        let qtyElement = $(this).siblings('.qty-counter');
        qty_counter(qtyElement,"minus");
    });

    // btn-plus on click
    $('.qty-counter-items').on('click','.btn-plus',function(){
        console.log('isssslih\n');
        let qtyElement = $(this).siblings('.qty-counter');
        qty_counter(qtyElement,"plus");
    })

});

// QTY Counter increment
function qty_counter(instance,typeCounter){
    let qtyVal = parseInt(instance.val());

    if(typeCounter==="minus"){
        if(qtyVal<=1)
        {
            instance.val(1);
        }
        else if(qtyVal>1)
        {
            instance.val(qtyVal-1);
        }
    }

    else if(typeCounter==="plus")
    {
        instance.val(qtyVal+1);
    }
    
}





function number_comma(number){
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

