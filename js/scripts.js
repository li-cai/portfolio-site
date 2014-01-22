$(document).ready(function() {

    $('#nav').css('top', $(window).height() - 165);

    $('.content, #projects, #resume').addClass('hidden');
    // $('#banner, #nav').addClass('offset');

    $('#about-link').click(function() {

        if ($('#top-banner').length > 0) {
            $('#projects-link, #resume-link').removeClass('active');
            $('#about-link').addClass('active');

            if ($(window).width() < 580) {
                $('#top-nav').removeClass('topnav-resized');
                $('#top-banner').removeClass('topbanner-resized');

                $('#projects, #resume').addClass('hidden');
                $('#about').show();

                $('#top-nav').attr('id', 'nav');
                $('#top-banner').attr('id', 'banner');

                resizeWindow();
            }
            else {

                $('#top-nav').animate({top: $(window).height() - 163.5},
                                      {duration: 1400, queue: false, 
                                       complete: function() {
                                           $('#top-nav').attr('id', 'nav');
                                           $('#nav').removeAttr('style');
                                           $('#nav').css('top', $(window).height() - 165);
                                           $('.content, #projects, #resume').addClass('hidden');
                                           // $('#nav').addClass('offset');
                                      }}
                                     ); // end top-nav animate

                $('#about').show();

                $('#top-banner').animate({height: $(window).height() - 30},
                                         {duration: 1400, queue: false,
                                         complete: function() {
                                             $('#top-banner').attr('id', 'banner');
                                             $('#banner').removeAttr('style');
                                             // $('#banner').addClass('offset');
                                         }}
                                        ); // end top-banner animate                
            }
        }
    }); // end click

    $('#projects-link').click(function() {
        $('#projects-link').addClass('active');
        $('#resume-link, #about-link').removeClass('active');
        $('#projects').removeClass('hidden');
        $('#resume').addClass('hidden');
    }); // end click

    $('#resume-link').click(function() {
        $('#resume-link').addClass('active');
        $('#projects-link, #about-link').removeClass('active');
        $('#resume').removeClass('hidden');
        $('#projects').addClass('hidden');
    }); // end click

    // navigation link effects
    $('div.nav-flag').each(function() {

        if ($(this).attr('id') != 'about-link' &&
            $('#banner').length > 0) {

            // click effect
            $(this).click(function() {
                // $('#nav, #banner').removeClass('offset');

                if ($(".about-resized")[0]) {
                    $('#banner').removeClass('about-resized');
                }

                if ($(window).width() < 580) {
                    $('#nav').removeClass('nav-resized');
                    $('#banner').removeClass('banner-resized');

                    $('#about').hide();
                    $('#nav').attr('id', 'top-nav');
                    $('#banner').attr('id', 'top-banner');

                    resizeWindow();
                }
                else {
                    $('.content').removeClass('hidden');

                    $('#nav').animate({top: '13.5px'},
                                      {duration: 1400, queue: false,
                                       complete: function() {
                                           $('#nav').attr({'id': 'top-nav', 'style': ''});
                                      }}
                                     ); // end nav animate

                    $('#banner').animate({height: '150px'}, 
                                         {duration: 1400, queue: false, 
                                          complete: function () {
                                              $('#about').hide();
                                              $('#banner').attr({'id': 'top-banner', 'style': ''});
                                         }}
                                        ); // end banner animate                    
                }             
            }); // end click
        }
    }); // end each

    resizeWindow();

    $(window).resize(function() {
        resizeWindow();
    }); // end resize

}); // end ready

function resizeWindow() {
    $('#nav').css('top', $(window).height() - 165);

    if ($(window).width() < 940) {
        $('.wrapper').addClass('resized');
    }
    else {
        $('.wrapper').removeClass('resized');
    }   

    if ($(window).width() < 580) {
        $('#top-banner').addClass('topbanner-resized');
        $('#top-nav').addClass('topnav-resized');
        $('img.header').addClass('header-resized');

        $('#banner').addClass('banner-resized');
        $('#nav').addClass('nav-resized')
        $('#nav').removeAttr('style');
        $('#nav').css('margin-top', '10px');
    }
    else {
        $('#top-banner').removeClass('topbanner-resized');
        $('#top-nav').removeClass('topnav-resized');
        $('img.header').removeClass('header-resized');

        $('#banner').removeClass('banner-resized');
        $('#nav').removeClass('nav-resized');
        $('#nav').removeAttr('style');
        $('#nav').css('top', $(window).height() - 165);
    }

    if ($(window).height() < $('#about').height() + 160) {
        $('#banner').addClass("about-resized");
    }
    else {
        $('#banner').removeClass("about-resized");
    }

    // if ($(window).height() < 566) {
    //     $('#banner, #nav').removeClass('offset');
    // }
    // else {
    //     $('#banner, #nav').addClass('offset');
    // }

    if ($(window).width() < 350) {
        $('img.header').removeClass('header-resized');
    }
    else {
        $('img.header').addClass('header-resized');
    }
}
