$('.slide-one').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [$('.landing__arrow__left'),$('.landing__arrow__right')],
    responsive:{
        0:{
            items:1
        }
    }
});

$('.slide-two').owlCarousel({
    loop:true,
    nav:true,
    navText: [$('.mobile__sides-left'),$('.mobile__sides-right')],
    responsive:{
        0:{
            items:1
        }
    }
});

$('.slide-three').owlCarousel({
    stagePadding: 170,
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1,
            margin:10,
            stagePadding: 40
        },
        768:{
            items:1
        },
        1024:{
            items:2
        }
    }
});

hamburger.onclick = function myFunction(){
    var x = document.getElementById('headerMenu')
    if (x.className === "header__left") {
        x.className += " header__responsive";       
    } else {
        x.className = "header__left";
    }
};

hamburger2.onclick = function myFunction(){
    var x = document.getElementById('companyInfoMenu')
    if (x.className === "wrapper") {
        x.className += " companyInfo__responsive";       
    } else {
        x.className = "wrapper";
    }
};
