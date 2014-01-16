$(document).ready(function() {

    // navigation link effects
    $('div.nav-flag').each(function() {
        var bgColor = $(this).css('background-color');

        // hover effect
        $(this).hover(
            function() {
                $(this).stop().animate({backgroundColor: '#e7eef9'}, 200);
                $(this).children('span:first').stop().animate({color: '#e7eef9'}, 200);
            },
            function() {
                $(this).stop().animate({backgroundColor: bgColor}, 200);
                $(this).children('span:first').stop().animate({color: bgColor}, 200);
            }
        ); // end hover

        // click effect
        $(this).click(function() {
            var bottomHeight = $(window).height() - 162;
            $('#nav').animate({bottom: bottomHeight},
                              {duration: 1800, queue: false,
                              complete: function() {
                                  $('#nav').attr('id', 'top-nav');
                              }}
                             ); // end nav animate


            $('#banner').animate({height: '120px'}, 
                                 {duration: 1800, 
                                  queue: false, 
                                  complete: function () {
                                      $('#about').hide();
                                      $('#banner').attr('id', 'top-banner'); 
                                  }}
                                ); // end banner animate
        }); // end click

    }); // end each

}); // end ready
