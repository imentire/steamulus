/**
 * Home page scripts.
 *
 * @module Home
 */
import Swiper from 'swiper';

export default class Home {
    /**
     * Cache data, make preparations and initialize page scripts.
     */
    constructor() {
        // initialize after construction
        this.init();
    }

    /**
     * Initialize Home page scripts.
     */
    init() {
        this.newsSlider = new Swiper('.swiper-news', {
            spaceBetween: 30,
            slidesPerView: 4,
            loop: false,
            loopedSlides: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        this.parntersSlider = new Swiper('.swiper-parnters', {
            spaceBetween: 30,
            slidesPerView: 6,
            loop: false,
            loopedSlides: 1,
            navigation: {
                nextEl: '.swiper-parnter-next',
                prevEl: '.swiper-parnter-prev',
            },
        });

        console.log('home init');

    }
}