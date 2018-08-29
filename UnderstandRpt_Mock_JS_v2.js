$(window).scroll(function () {
    if ($("#nav-dropdown-content").css('display') == 'block'){
        return;
    }
    else if ($(document).scrollTop() <= 40) {
        $('#main-nav').removeClass('scrolled-nav');     // Changes different stylings based on user scrolling up to top 40px
    } 
    else {
        $('#main-nav').addClass('scrolled-nav');        // Changes different stylings based on user scrolling down past 40px
        $('.dropdown-content').css("display","none");   // Hides initially displayed dropdown if user scrolls page at all
    } 
}).one('scroll', function() {
    $('.dropdown-content').css("display","none");   // Hides initially displayed dropdown if user scrolls page at all
    }); 

// Makes the dropdown which is displayed when page is first opened disapper after clicking anywhere
$(document).one('click', function() {
  $('.dropdown-content').css("display","none");
});

//var isHovered = $("#dropdown-button").is(":hover");


/**

var body = document.body;

var dropdownDisp = function() {
if( $("#nav-dropdown-content").css('display') == 'block') {
    //$('#main-content').addClass('noscroll');
    $('#main-content').css('overflow', 'hidden');
    $('#main-content').css('position', 'relative');
}
else {
    $('#main-content').css('overflow', 'auto');
    $('#main-content').css('position', 'relative');
}
};

setInterval(dropdownDisp, 1000);






if ($('main-dropdown:hover').length !== 0) {
    alert('hi');
}

function isHover(e) {
    return (e.parentElement.querySelector(':hover') === e);
}


var navContent = document.getElementById('main-dropdown');
document.addEventListener('mousemove', function checkHover() {
    var hovered = isHover(navContent);
    if (hovered) {
        alert('hi')
    }

});

setInterval(function() {
    if ($('#nav-dropdown-content:hover')) {
    //alert($(".dropdown-content").scrollTop());
        $("#nav-dropdown-content").css("background", "yellow");
        //$('#main-content').addClass('noscroll');
    }
    else {
        $("#nav-dropdown-content").css("background", "aaa");
    }
}, 1);


$(".dropdown .dropdown-content").mouseout(function() {
    $("#nav-dropdown-content").scrollTop();
});

**/