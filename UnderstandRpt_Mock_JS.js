$(window).scroll(function () {
    if ($("#nav-dropdown-content").css('display') == 'block'){  //Stops sticky nav collapse if Contents is displayed (prevents everything jumping around)
        if ($(document).scrollTop() > 40) {
            sessionStorage.setItem('navbarScrollHold', 'expanded');    //Stores variable to tell page navbar is expanded (but should be collapsed)
        }
        else if ($(document).scrollTop() <= 40) {
            sessionStorage.setItem('navbarScrollHold', 'collapsed');    //Stores variable to tell page navbar is collapsed (but should be expanded)
        }
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

// Function checks every .2s to see if navbar is being held and can now be collapsed/expanded (respectively)
setInterval(function() {
    if (sessionStorage.getItem('navbarScrollHold') == 'expanded' && $("#nav-dropdown-content").css('display') == 'none') {
        $('#main-nav').addClass('scrolled-nav');
        sessionStorage.setItem('navbarScrollHold', 'no');
    }
    else if (sessionStorage.getItem('navbarScrollHold') == 'collapsed' && $("#nav-dropdown-content").css('display') == 'none') {
        $('#main-nav').removeClass('scrolled-nav');
        sessionStorage.setItem('navbarScrollHold', 'no');
    }
}, 200);

var pagedesc = document.getElementById("pagedesc");
var descHeight = (pagedesc.clientHeight + 1);   //In px
var descWidth = (pagedesc.clientWidth + 1);     //In px
var descWidth2 = (pagedesc.width());
$document.on('click', function() {
    alert("Width: " + descWidth + " / " + descWidth2 + " Height: " + descHeight);
});

// Makes the dropdown which is displayed when page is first opened disapper after clicking anywhere
$(document).one('click', function() {
  $('.dropdown-content').css("display","none");
});

// Returns the current page to the top
function pageToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Checks whether this is the first time a user is viewing the report in a given session, and if it is, displays the Table of Contents dropdown
// Note that this uses sessionStorage, which is cleared when browser window is closed. localStorage could be used to persist forever
if (!sessionStorage.getItem('viewedUnderstandReport')){
    setTimeout(function() {
        $('.dropdown-content').css("display", "block");
        sessionStorage.setItem('viewedUnderstandReport', 'yes');
    }, 10);
};

//var filename = (document.location.pathname.match(/[^\/]+$/)[0]).split('.')[0]   //Gets the filename without .html extension (ie index.html == index)

// NavBar V3: navbar() function is called from html page on load, places upperNav and table of contents (var ToC
//          in file table_of_contents.js) into html divs by template literal
function navbar() {
    //$('#main-nav').prepend(upperNav);
    $('#lower-nav').prepend(ToC)
};



