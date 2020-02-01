function changePicturesSize() {
  $('.works .col-3').height($('.works .col-3').width()/1.33);
  $(window).resize(function(){
    $('.works .col-3').height($('.works .col-3').width()/1.33);
  });
};

function changeHeight() {
	if ($(document).width() < 576) {
	  $('.works-slideHeight').height($('.works-slideHeight').width()/1.55);
	  $(window).resize(function(){
	    $('.works-slideHeight').height($('.works-slideHeight').width()/1.55);
	  });
	}
	else if ($(document).width() < 768) {
	  $('.works-slideHeight').height($('.works-slideHeight').width()/1.85);
	  $(window).resize(function(){
	    $('.works-slideHeight').height($('.works-slideHeight').width()/1.85);
	  });		
	}
	else if ($(document).width() < 992) {
	  $('.works-slideHeight').height($('.works-slideHeight').width()/2.0);
	  $(window).resize(function(){
	    $('.works-slideHeight').height($('.works-slideHeight').width()/2.0);
	  });		
	}
	else {
	  $('.works-slideHeight').height($('.works-slideHeight').width()/2.13);
	  $(window).resize(function(){
	    $('.works-slideHeight').height($('.works-slideHeight').width()/2.13);
	  });		
	};
};

function navClickDropdown() {
	features.onclick = function myFunction(){
		if ($(document).width() < 992) {
		    var f = document.getElementById('features')
		    f.setAttribute('data-toggle', 'dropdown')
		}
	};
	works.onclick = function myFunction(){
		if ($(document).width() < 992) {
		    var w = document.getElementById('works')
		    w.setAttribute('data-toggle', 'dropdown');
		}
	};
};

$(function() {
	$(window).resize(changeHeight);
	$(changeHeight);
	$(changePicturesSize);
	$(navClickDropdown);
});
