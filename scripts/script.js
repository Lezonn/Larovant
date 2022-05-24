let burgerMenu = $('#burger-menu')
let menu = $('#menu')

$(burgerMenu).click(() => {
    menu.toggleClass('burger-menu-active')
});

$('.game-info').click(function () {
    $('.ddl-game-info').toggleClass('ddl-active');
    $('.arrow-game-info').toggleClass('arrow-active')
})

$('.social-media').click(function () {
    $('.ddl-social-media').toggleClass('ddl-active-2');
    $('.arrow-social-media').toggleClass('arrow-active')
})