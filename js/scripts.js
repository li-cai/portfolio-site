$(document).ready(function() {

    $('div.content').css({'position': 'relative', 'top': $(window).height()});

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
            $('.content').show();
            $('.content').animate({top: '158px'}, 
                                  {duration: 1400, queue: false,
                                   complete: function() {
                                       $('.content').attr('style', '');  
                                   }}
                                 ); // end content animate

            var bottomHeight = $(window).height() - 162;
            $('#nav').animate({bottom: bottomHeight},
                              {duration: 1400, queue: false,
                              complete: function() {
                                  $('#nav').attr({'id': 'top-nav', 'style': ''});
                              }}
                             ); // end nav animate


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
