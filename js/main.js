$(document).ready(function() {
    // Cambio de header a transparente
    $(window).on('scroll', function() {
        let posicion  = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top-100) {
            $('header').removeClass('transparente');
        } else {
            $('header').addClass('transparente');
        } 
    })
    //Accionamiento del menú lateral
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    });
    //Smoth scroll
    $('a').on('click',function() {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})