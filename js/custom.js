function spiderjam(mym, myd){
        document.write("<a href=mailto:"	+ mym + "&#64;" + myd + ">" + mym + "&#64;" + myd + "</a>");
    }

    function firefox() {
        var browser=navigator.userAgent.toLowerCase();
        if(browser.indexOf('firefox') > -1) {
            $('#bs-example-navbar-collapse-2').toggle();
        }
    }

    function reset_menus() {
        sizing($(window).width());
    }

    function sizing(windowWidth) {    
        if(windowWidth <= 480){ // ipad:768, Nexus10:800, 480
            $('.allshow').hide(); //
            $('.noshow').show();
            $('.expandshow').show();
            $('.collapseshow').hide();
        } else {
            $('.allshow').show();
            $('.noshow').hide();
            $('.expandshow').hide();
            $('.collapseshow').hide();
        }
    }

    jQuery(document).ready(function($) {
        var windowWidth = $(window).width();
        $(window).resize(function(){
            // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
            if ($(window).width() != windowWidth) {
                windowWidth = $(window).width();
                sizing(windowWidth);
            }
        });
        sizing(windowWidth);
    });