$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 500) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

})