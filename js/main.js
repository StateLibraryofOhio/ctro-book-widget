document.addEventListener("DOMContentLoaded", function () {

    const THRESHOLD = 600;
    const isMobile = window.screen.width < THRESHOLD;

    const config = {
        arrows: !isMobile,
        autoplay: true,
        classes: {
            arrow: "splide__arrow ctro__widget-arrow",
            prev: "splide__arrow--prev ctro__widget-arrow--prev",
            next: "splide__arrow--next ctro__widget-arrow--next",
            pagination: "splide__pagination ctro__widget-pagination",
        },
        focus: 'center',
        gap: '1.5em',
        interval: 3900,
        lazyLoad: 'sequential',
        pagination: !isMobile,
        pauseOnHover: true,
        perMove: 3,
        perPage: 7,
        preloadPages: 5,
        type: 'loop',
        width: 'auto',
        breakpoints: {
            2048: {
                perPage: 4,
                perMove: 1,
                fixedWidth: '350px',
                gap: "2em"
            },
            1024: {
                perPage: 4,
                perMove: 1,
                fixedWidth: '250px',
                gap: "2em"
            },
            768: {
                perPage: 1,
                perMove: 1,
                gap: "2em"
            }
        },
    }

    var splide = new Splide('.splide', config);
    splide.mount();
});
