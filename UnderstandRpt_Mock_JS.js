$(window).scroll(function () {
    if ($("#nav-dropdown-content").css('display') == 'block'){  //Stops sticky nav collapse if Contents is displayed (prevents everything jumping around)
        return;
    }
    else if ($(document).scrollTop() <= 40) {
        $('#main-nav').removeClass('scrolled-nav');     // Changes different stylings based on user scrolling up to top 40px
    } 
    else {
        $('#main-nav').addClass('scrolled-nav');        // Changes different stylings based on user scrolling down past 40px
    } 
}).one('scroll', function() {
    $('.dropdown-content').css("display","none");   // Hides initially displayed dropdown if user scrolls page at all
    }); 

// Makes the dropdown which is displayed when page is first opened disapper after clicking anywhere
$(document).one('click', function() {
  $('.dropdown-content').css("display","none");
});
