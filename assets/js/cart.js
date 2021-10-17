$(document).ready(function () {
    
    // btn-minus on click
    $('.items-cart').on('click','.btn-minus',function(){
        console.log('isssslih\n');
        let qtyElement = $(this).siblings('.qty-counter');
        qty_counter(qtyElement,"minus");
    });

    // btn-plus on click
    $('.items-cart').on('click','.btn-plus',function(){
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

