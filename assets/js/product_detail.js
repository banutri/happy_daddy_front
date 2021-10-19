$(document).ready(function () {
    $('#right-btn').on('click',function(){
        $('.small-images-inner-container').animate({
            scrollLeft:"+=90",
        })
        console.log('ilih kntl');
    });
    $('#left-btn').on('click',function(){
        $('.small-images-inner-container').animate({
            scrollLeft:"-=90",
        })
        console.log('ilih kntl');
    });
});