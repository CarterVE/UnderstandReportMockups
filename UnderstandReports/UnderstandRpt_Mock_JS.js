$(window).scroll(function () {
    if ($(document).scrollTop() <= 40) {
        //$('#main-nav').removeClass('scrolled-nav');
        //$('#menu-spacing').addClass('nav-margin-top');
        //$(".floatright").show();
        //$('.floatleft img').attr('src', 'understand-logo-crop.png');
        //$('.floatleft img').height(52.22).width(260);
        $('ul').show();
    } else {
        //$('#main-nav').addClass('scrolled-nav');
        // $('#menu-spacing').removeClass('nav-margin-top');
        $('ul').hide();
        /**
        $(function() {
          var smallIcn = $('<img />').attr({
            'id': 'smallIcon',
            'src': '512x512.png',
            'alt': 'Understand',
            'height': 25,
            'width': 25
          }).appendTo('#navbarL.#navbarLfloatlL')
        });
        **/
    }
}); 

/*
$(function(){
  $("#content").load("test_content.html");
});

setFrameSRC() {
  document.getElementById('content-frame').src = "overview.html";
}
*/