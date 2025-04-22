jQuery( document ).ready(function() {
    jQuery('.mobile-bar').click(function(){
        jQuery('.header-main .col-md-6').toggleClass('hidden-mobile')
    });
 
    jQuery('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 1,
    });

});


