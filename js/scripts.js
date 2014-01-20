$(document).ready(function() {
    // $('div.content').css({'position': 'relative', 
    //                       'top': $(window).height()});

    $('#nav').css('top', $(window).height() - 165);
    //$('#banner').css('height', $(window).height() - 60);

    $('#projects, #resume').addClass('hidden');
    $('#banner, #nav').addClass('offset');

    $('#about-link').click(function() {
        if ($('#top-banner').length > 0) {
            $('#projects-link, #resume-link').removeClass('active');
            $('#about-link').addClass('active');

            // $('#top-nav').css({'position': 'fixed', 
            //                    'left': '43%', 
            //                    'width': '40.36%', 
            //                    'margin-top': '10px'});

            $('#top-nav').animate({top: $(window).height() - 163.5},
                                  {duration: 1400, queue: false, 
                                   complete: function() {
                                       $('#top-nav').attr('id', 'nav');
                                       $('#nav').removeAttr('style');
                                       $('#nav').css('top', $(window).height() - 165);
                                       $('#projects, #resume').addClass('hidden');
                                       $('#nav').addClass('offset');
                                   }}
                                 ); // end top-nav animate

            $('#about').show();

            // $('#top-banner').css('margin-top', '3px');
            $('#top-banner').animate({height: $(window).height() - 30},
                                     {duration: 1400, queue: false,
                                      complete: function() {
                                          $('#top-banner').attr('id', 'banner');
                                          $('#banner').removeAttr('style');
                                          $('#banner').addClass('offset');
                                      }}
                                    ); // end top-banner animate

            // $('.content').animate({marginTop: $(window).height() - 120},
            //                       {duration: 1400, queue: false,
            //                        complete: function() {
            //                            $('.content').removeAttr('style');  
            //                            $('.content').css({'position': 'relative', 
            //                                                  'top': $(window).height()}); 
            //                        }}
            //                      ); // end content animate
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
                $('.content').css('display', '');
                // $('.content').animate({top: '2.5px'}, 
                //                       {duration: 1400, queue: false,
                //                        complete: function() {
                //                            $('.content').removeAttr('style');
                //                        }}
                //                      ); // end content animate

                // var bottomHeight = $(window).height() - 162;

                if ($(".banner-resized")[0]) {
                    $('#banner').removeClass('banner-resized');
                }                

                $('#nav, #banner').removeClass('offset');

                $('#nav').animate({top: '13.5px'},
                                  {duration: 1400, queue: false,
                                  complete: function() {
                                      $('#nav').attr({'id': 'top-nav', 'style': ''});
                                  }}
                                 ); // end nav animate

                // $('#banner').css('left', '0');
                $('#banner').animate({height: '150px'}, 
                                     {duration: 1400, 
                                      queue: false, 
                                      complete: function () {
                                          $('#about').hide();
                                          $('#banner').attr({'id': 'top-banner', 'style': ''});
                                      }}
                                    ); // end banner animate
            }); // end click
        }

    }); // end each

    var windowHeight = $(window).height();
    resizeWindow();

    $(window).resize(function() {
        resizeWindow();
    }); // end resize

}); // end ready

function resizeWindow() {
    if ($(window).width() < 920) {
        $('.wrapper').addClass('resized');
    }
    else {
        $('.wrapper').removeClass('resized');
    }   

    if ($(window).width() < 580) {
        $('#top-banner').addClass('topbanner-resized');
        $('#top-nav').addClass('topnav-resized');
        $('img.header').addClass('header-resized');
    }
    else {
        $('#top-banner').removeClass('topbanner-resized');
        $('#top-nav').removeClass('topnav-resized');
        $('img.header').removeClass('header-resized');
    }

    $('#nav').css('top', $(window).height() - 165);

    if ($(window).height() < $('#about').height() + 160) {
        $('#banner').addClass("banner-resized");
    }
    else {
        $('#banner').removeClass("banner-resized");
    }
}
