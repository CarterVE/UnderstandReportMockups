$(window).scroll(function () {
    if ($(document).scrollTop() <= 40) {
        $('#main-nav').removeClass('scrolled-nav');
        //$('.und-icon').removeClass('scrolled-nav');
        //$('#menu-spacing').addClass('nav-margin-top');
        //$(".floatright").show();
        //$('.floatleft img').attr('src', 'understand-logo-crop.png');
        //$('.floatleft img').height(52.22).width(260);
        //$('.und-icon').show();
    } else {
        $('#main-nav').addClass('scrolled-nav');
        $('.dropdown-content').css("display","none")
        //$('.und-icon').addClass('scrolled-nav');
        // $('#menu-spacing').removeClass('nav-margin-top');
        //$('.und-icon').hide();
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

$(document).on('click', function() {
  $('.dropdown-content').css("display","none")
});


/*
$(function(){
  $("#content").load("test_content.html");
});

setFrameSRC() {
  document.getElementById('content-frame').src = "overview.html";
}
*/


/*
    $(".floatright").hide();
        $('.floatleft img').attr('src', '512x512.png');
        $('.floatleft img').height(30).width(30);
    $('#navbar').addClass('.floatleft');
        $('#navbar').prepend('<img src=512x512.png />');
        $('#navbar.floatleft img').height(30).width(30);
*/