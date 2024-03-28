$('a[href^="#"]').click(function(event) {
    event.preventDefault();

    var targetId = $(this).attr('href');

    if ($(targetId).length) {
        var targetOffset = $(targetId).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000);
    }
});


