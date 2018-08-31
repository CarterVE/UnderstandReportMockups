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

// $('#main-nav-div').on('pagebeforecreate', function() {
//     //$('[data-role="navbar"]').html('<nav id="main-nav" class="nav">' + '<div id="upper-nav">' + '      <img id=und-icon src="understand-logo-crop.png" alt="Understand">' + '</div>' + '<div id="lower-nav" class="navbar">' + '    <div id="main-dropdown" class="dropdown">' + '        <button id="dropdown-button" class="dropbtn">Contents <img id="dropdown-icon" src="ToCdropdown.png" style="height:12px"></button> ' + '        <div id="nav-dropdown-content" class="dropdown-content">' + '            <a href="UnderstamdRpt_Mock.html">Overview</a>' + '            <a href="overview.html">1 Data Dictionary</a>' + '            <a href="#">2 File Contents</a>' + '            <a href="#">3 Invocation Tree</a>' + '' + '            <a href="#">5 File Contents</a>' + '            <a href="#">6 Invocation Tree</a>' + '            <a href="#">7 Data Dictionary</a>' + '            <a href="#">8 File Contents</a>' + '            <a href="#">9 Invocation Tree</a>' + '            <a href="#">10 Data Dictionary</a>' + '            <a href="#">11 File Contents</a>' + '            <a href="#">12 Invocation Tree</a>' + '    <!--         <a href="#">13 Data Dictionary</a>' + '            <a href="#">14 File Contents</a>' + '            <a href="#">15 Invocation Tree</a>' + '            <a href="#">16 Data Dictionary</a>' + '            <a href="#">17 File Contents</a>' + '            <a href="#">18 Invocation Tree</a>' + '            <a href="#">19 Data Dictionary</a>' + '            <a href="#">20 File Contents</a>' + '            <a href="#">21 Invocation Tree</a>' + '            <a href="#">22 Invocation Tree</a>' + '            <a href="#">23 Data Dictionary</a>' + '            <a href="#">24 File Contents</a>' + '            <a href="#">25 Invocation Tree</a> -->' + '        </div>' + '    </div>' + '    <button onclick="pageToTop()" id="pagedesc" title="Return to top of page">Pixie - Overview</button>' + '    <div class="navCenter">' + '        <a href="#test">&</a>' + '        <a href="#A">A</a>' + '        <a href="#B">B</a>' + '        <a2>C</a2>' + '        <a href="#D">D</a>' + '        <a href="#E">E</a>' + '        <a href="#F">F</a>' + '        <a href="#G">G</a>' + '        <a2>H</a2>     <!-- OR different color/not underlined OR &middot; OR &minus; OR &bull;-->' + '        <a href="#I">I</a>' + '        <a href="#J">J</a>' + '        <a href="#K">K</a>' + '        <a2>L</a2>' + '        <a href="#M">M</a>' + '        <a href="#N">N</a>' + '        <a href="#O">O</a>' + '        <a2>P</a2>' + '        <a href="#Q">Q</a>' + '        <a href="#R">R</a>' + '        <a href="#S">S</a>' + '        <a2>T</a2>' + '        <a href="#U">U</a>' + '        <a href="#V">V</a>' + '        <a href="#W">W</a>' + '        <a href="#X">X</a>' + '        <a href="#Y">Y</a>' + '        <a href="#Z">Z</a>' + '    </div>' + '</div>"' + '' + '</nav>');
//     $('#main-nav-div').html('<ul>' +
//         '<li><a href="#SomePage" data-transition="fade" data-icon="none">By Brand</a></li>' +
//         '<li><a href="#AnotherPage" data-transition="fade" data-icon="none">By Flavor</a></li>' +
//         '<li><a href="#LastPage" data-transition="fade" data-icon="none">Zero Nicotine</a></li>' +
//         '</ul>');
// });

//var navPrepend = '<nav id="main-nav" class="nav">' + '<div id="upper-nav">' + '      <img id=und-icon src="understand-logo-crop.png" alt="Understand">' + '</div>' + '<div id="lower-nav" class="navbar">' + '    <div id="main-dropdown" class="dropdown">' + '        <button id="dropdown-button" class="dropbtn">Contents <img id="dropdown-icon" src="ToCdropdown.png" style="height:12px"></button> ' + '        <div id="nav-dropdown-content" class="dropdown-content">' + '            <a href="UnderstamdRpt_Mock.html">Overview</a>' + '            <a href="overview.html">1 Data Dictionary</a>' + '            <a href="#">2 File Contents</a>' + '            <a href="#">3 Invocation Tree</a>' + '' + '            <a href="#">5 File Contents</a>' + '            <a href="#">6 Invocation Tree</a>' + '            <a href="#">7 Data Dictionary</a>' + '            <a href="#">8 File Contents</a>' + '            <a href="#">9 Invocation Tree</a>' + '            <a href="#">10 Data Dictionary</a>' + '            <a href="#">11 File Contents</a>' + '            <a href="#">12 Invocation Tree</a>' + '    <!--         <a href="#">13 Data Dictionary</a>' + '            <a href="#">14 File Contents</a>' + '            <a href="#">15 Invocation Tree</a>' + '            <a href="#">16 Data Dictionary</a>' + '            <a href="#">17 File Contents</a>' + '            <a href="#">18 Invocation Tree</a>' + '            <a href="#">19 Data Dictionary</a>' + '            <a href="#">20 File Contents</a>' + '            <a href="#">21 Invocation Tree</a>' + '            <a href="#">22 Invocation Tree</a>' + '            <a href="#">23 Data Dictionary</a>' + '            <a href="#">24 File Contents</a>' + '            <a href="#">25 Invocation Tree</a> -->' + '        </div>' + '    </div>' + '    <button onclick="pageToTop()" id="pagedesc" title="Return to top of page">Pixie - Overview</button>' + '    <div class="navCenter">' + '        <a href="#test">&</a>' + '        <a href="#A">A</a>' + '        <a href="#B">B</a>' + '        <a2>C</a2>' + '        <a href="#D">D</a>' + '        <a href="#E">E</a>' + '        <a href="#F">F</a>' + '        <a href="#G">G</a>' + '        <a2>H</a2>     <!-- OR different color/not underlined OR &middot; OR &minus; OR &bull;-->' + '        <a href="#I">I</a>' + '        <a href="#J">J</a>' + '        <a href="#K">K</a>' + '        <a2>L</a2>' + '        <a href="#M">M</a>' + '        <a href="#N">N</a>' + '        <a href="#O">O</a>' + '        <a2>P</a2>' + '        <a href="#Q">Q</a>' + '        <a href="#R">R</a>' + '        <a href="#S">S</a>' + '        <a2>T</a2>' + '        <a href="#U">U</a>' + '        <a href="#V">V</a>' + '        <a href="#W">W</a>' + '        <a href="#X">X</a>' + '        <a href="#Y">Y</a>' + '        <a href="#Z">Z</a>' + '    </div>' + '</div>"' + '' + '</nav>'

var filename = (document.location.pathname.match(/[^\/]+$/)[0]).split('.')[0]   //Gets the filename without .html extension (ie index.html == index)

var navMain = `

<nav id="main-nav" class="nav">
  <div id="upper-nav">
      <img id=und-icon src="understand-logo-crop.png" alt="Understand">
  </div>
  <div id="lower-nav" class="navbar">
    <div id="main-dropdown" class="dropdown">
      <button id="dropdown-button" class="dropbtn">Contents <img id="dropdown-icon" src="ToCdropdown.png" style="height:12px"></button> 
      <div id="nav-dropdown-content" class="dropdown-content">
        <a href="UnderstandRpt_Mock.html">Overview</a>
        <a href="overview.html">Data Dictionary</a>
        <a href="#">File Contents</a>
        <a href="#">PInvocation Tree</a>

        <a href="#">Object Cross Reference</a>
        <a href="#">TInvocation Tree</a>
        <a href="#">MData Dictionary</a>
        <a href="#">IFile Contents</a>
        <a href="#">EInvocation Tree</a>
        <a href="#">SData Dictionary</a>
        <a href="#">Program Unit Cross Reference</a>
<!--         <a href="#">12 Invocation Tree</a>
        <a href="#">13 Data Dictionary</a>
        <a href="#">14 File Contents</a>
        <a href="#">15 Invocation Tree</a>
        <a href="#">16 Data Dictionary</a>
        <a href="#">17 File Contents</a>
        <a href="#">18 Invocation Tree</a>
        <a href="#">19 Data Dictionary</a>
        <a href="#">20 File Contents</a>
        <a href="#">21 Invocation Tree</a>
        <a href="#">22 Invocation Tree</a>
        <a href="#">23 Data Dictionary</a>
        <a href="#">24 File Contents</a>
        <a href="#">25 Invocation Tree</a> -->
      </div>
    </div>
    <button onclick="pageToTop()" id="pagedesc" title="Return to top of page">Pixie - Overview</button>
`

var navAlpha_main = `
    <div class="navCenter">
        <a href="#test">&</a>
        <a href="#A">A</a>
        <a href="#B">B</a>
        <a2>C</a2>
        <a href="#D">D</a>
        <a href="#E">E</a>
        <a href="#F">F</a>
        <a href="#G">G</a>
        <a2>H</a2>     <!-- OR different color/not underlined OR &middot; OR &minus; OR &bull;-->
        <a href="#I">I</a>
        <a href="#J">J</a>
        <a href="#K">K</a>
        <a2>L</a2>
        <a href="#M">M</a>
        <a href="#N">N</a>
        <a href="#O">O</a>
        <a2>P</a2>
        <a href="#Q">Q</a>
        <a href="#R">R</a>
        <a href="#S">S</a>
        <a2>T</a2>
        <a href="#U">U</a>
        <a href="#V">V</a>
        <a href="#W">W</a>
        <a href="#X">X</a>
        <a href="#Y">Y</a>
        <a href="#Z">Z</a>
    </div>
    `

var navAlpha_overview = ""

var navEnd = `
</div>
</nav>
`


// NavBar V1: Declare each alpha as a seperate variable (fairly ridiculous)
$(document).ready(function() {
    if (filename == 'UnderstandRpt_Mock') {
        $('body').prepend(navMain + navAlpha_main + navEnd);
    }
    else if (filename == 'overview') {
        $('body').prepend(navMain + navAlpha_overview + navEnd);
    }
});





