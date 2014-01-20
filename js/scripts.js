$(document).ready(function() {
    $('div.content').css({'position': 'relative', 'top': $(window).height()});

    $('#projects').addClass('hidden');
    $('#resume').addClass('hidden');

    $('#about-link').click(function() {
        if ($('#top-banner').length > 0) {
            $('#projects-link, #resume-link').removeClass('active');
            $('#about-link').addClass('active');
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
        }

    }); // end each

}); // end ready
