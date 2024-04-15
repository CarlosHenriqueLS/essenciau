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


$(document).ready(function() {
    var myObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');

                observer.unobserve(entry.target);
            }
        });
    });

    $('.hidden').each(function() {
        myObserver.observe(this);
    });
});


