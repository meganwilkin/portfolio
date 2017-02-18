//document.ready / window.onload / self-calling function
var scrollHandler = function(){
    // Detect if the strap line container is visible and if so animate it in
    if ($('#strap-line').visible()) {
        $('#strap-line-upper').addClass('appear');
        $('#strap-line-lower').addClass('appear');
        $('.info-image').addClass('appear');
        $(document).off('scroll', this);        
    }
};

var scrollToStrapline = function() {
    $('html, body').animate({
        scrollTop: $("#strap-line-upper").offset().top - 70
    }, 2000);
};

$(document).ready(function(){
    $(this).on('scroll',scrollHandler);
    
    if ($('#strap-line').visible()) {
        scrollHandler();
    }
    
    $('.read-more-icon').click(function() {
        scrollToStrapline();
    });
});
