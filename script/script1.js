$('.testimonial-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:2 
        },
        1000:{
            items:2
        }
    }
})
let wow=new WOW().init();