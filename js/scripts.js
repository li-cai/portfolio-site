$(document).ready(function() {
    $('div.content').css({'position': 'relative', 'top': $(window).height()});

    $('#projects').css('display', 'none');
    $('#resume').css('display', 'none');

    $('#projects-link').click(function() {
        $('#projects').attr('style', '');
        $('#resume').css('display', 'none');
    });

    $('#resume-link').click(function() {
        $('#resume').attr('style', '');
        $('#projects').css('display', 'none');
    });

    // navigation link effects
    $('div.nav-flag').each(function() {
        // hover effect
        $(this).hover(
            function() {
                $(this).stop().animate({opacity: '0.65'}, 200);
            },
            function() {
                $(this).stop().animate({opacity: '1.0'}, 200);
                $(this).attr('style', '');
            }
        ); // end hover

        // click effect
        $(this).click(function() {
            $('.content').css('display', '');
            $('.content').animate({top: '162px'}, 
                                  {duration: 1400, queue: false,
                                   complete: function() {
                                       $('.content').attr('style', '');  
                                   }}
                                 ); // end content animate

            var bottomHeight = $(window).height() - 162;
            $('#nav').css({'margin-left': '0', 'width': '40.36%'});
            $('#nav').animate({bottom: bottomHeight},
                              {duration: 1400, queue: false,
                              complete: function() {
                                  $('#nav').attr({'id': 'top-nav', 'style': ''});
                              }}
                             ); // end nav animate

            $('#banner').css('margin-left', '0');
            $('#banner').animate({height: '120px'}, 
                                 {duration: 1400, 
                                  queue: false, 
                                  complete: function () {
                                      $('#about').hide();
                                      $('#banner').attr({'id': 'top-banner', 'style': ''});
                                  }}
                                ); // end banner animate
        }); // end click

    }); // end each

}); // end ready
