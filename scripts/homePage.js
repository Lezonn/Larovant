let headerText = $('.header-text')

$(headerText).css({
    'transform' : 'translate(0%, 0%)',
    'opacity' : '100%'
})

$(window).on('resize scroll', function() {

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    
    let aboutUs = $('.about-us-title')
    let agents = $('.agents-title')
    let maps = $('.maps-title')


    

    if (aboutUs.isInViewport()) {
        $(aboutUs).css({
            'transform' : 'translate(0%, 0%)',
            'opacity' : '100%'
        })
    }

    if (agents.isInViewport()) {
        $(agents).css({
            'transform' : 'translate(0%, 0%)',
            'opacity' : '100%'
        })
    }

    if (maps.isInViewport()) {
        $(maps).css({
            'transform' : 'translate(0%, 0%)',
            'opacity' : '100%'
        })
    }
});