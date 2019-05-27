$('.header__slide').owlCarousel({
    loop:true,   
    nav:true,
    navText: [$('.am-next'),$('.am-prev')],
    responsive:{
        0:{
            items:1
        },
    }
});
$('.opinion_slider__main').owlCarousel({
    loop:true,   
    nav:true,
    navText: [$('.opinion_slider__arrows-left'),$('.opinion_slider__arrows-right')],
    responsive:{
        0:{
            items:1
        },
    }
});

window.onload = function() {
    hamburger.onclick = function myFunction(){
        var x = document.getElementById('menu');
        var z = document.getElementById('carousel');
        var y = document.getElementById('nav');

        if (x.className === "header__menu") {
            x.className += " header__responsive";
            z.className += " opacity"; 
            y.className += "back";        
        } else {
            x.className = "header__menu";
            z.className = "owl-carousel  owl-theme header__slide owl-loaded owl-drag";
            y.className = "";
        } 
    };
}