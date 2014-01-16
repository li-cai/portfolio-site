$(document).ready(function() {

    // navigation link hover effect
    $('div.nav-flag').each(function() {
        var bgColor = $(this).css('background-color');

        $(this).hover(
            function() {
                $(this).stop().animate({backgroundColor: '#FFA476'}, 200);
                $(this).children('span:first').stop().animate({color: '#FFA476'}, 200);
            },
            function() {
                $(this).stop().animate({backgroundColor: bgColor}, 200);
                $(this).children('span:first').stop().animate({color: bgColor}, 200);
            }
        ); // end hover
    }); // end each

    // 

}); // end ready