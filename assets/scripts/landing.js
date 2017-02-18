//document.ready / window.onload / self-calling function
var scrollHandler = function(){
    // Detect if the strap line container is visible and if so animate it in
    if ($('.strap-line').visible()) {
        $('.strap-line-upper').addClass('appear');
        $('.strap-line-lower').addClass('appear');
        $('.info-image').addClass('appear');
        $(document).off('scroll', scollHandler);        
    }
};


$(document).ready(function(){
    $(this).on('scroll',scrollHandler);
//    $('.strap-line-upper').hide();
//    $('.strap-line-lower').hide();
});
