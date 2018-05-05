$(document).ready(main);



function main(){
    $('#nav-menu').toggleClass('active');
    $('.page-heading').addClass('page-heading--loaded');

    $('.menu_bar').click(function(){
        // $('nav').toggle();

        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }

    });

    // Toggle mobile nav menu on click
    $('.nav-toggle').click(function(){
        $('.main-nav').toggleClass('active');
        $('#nav-menu').toggleClass('active');      

    });



}
