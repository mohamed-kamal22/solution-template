$(document).ready(function(){

    $(window).scroll(function() {
        var window = $(this).scrollTop()
        if ( window > 100) {
            $('.scrollTop').show()
        } else {
            $('.scrollTop').hide()
        }
    });

    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },450);
    });

    $('.navbar-nav .nav-item').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        });
        
    });

});