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
    
    $('.hidden-2').each(function() {
        myObserver.observe(this);
    });
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = $(mobileMenu);
        this.navList = $(navList);
        this.navLinks = $(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.each((index, link) => {
            const animationDuration = index / 7 + 0.3;
            $(link).css("animation", `navLinkFade ${animationDuration}s ease forwards 0.3s`);
        });
    }

    handleClick() {
        this.navList.toggleClass(this.activeClass);
        this.mobileMenu.toggleClass(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.on("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu.length > 0) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();


