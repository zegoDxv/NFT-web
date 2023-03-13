import * as flsFunctions from "./modules/functions.js"
import Swiper from "swiper"
import {Navigation, EffectFade, Pagination, Thumbs, Controller, FreeMode, Scrollbar, A11y, Mousewheel} from "swiper"
import AOS from "aos"
import burger from "./modules/burger.js"

burger

flsFunctions.isWebp()

const swiper = () => {
    new Swiper(".auctions-slider", {
        navigation: {
            nextEl: ".swiper-button-next1",
            prevEl: ".swiper-button-prev1",
        },
        modules: [Navigation, FreeMode],
        autoHeight: true,
        speed: 500,
        slidesPerView: 2.8,
        spaceBetween: 15,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
            1300: {
                spaceBetween: 42,
            },
            1080: {
                slidesPerView: 2.8,
            },
            100: {
                slidesPerView: 2,
            },
        },
    })
}

function detectDevice(swiper) {
    if (window.innerWidth < 770) {
        for (let i = 0; i <= 2; i++) {
            document.querySelectorAll(".auctions__slide")[i].style.display = "block"
            document.querySelectorAll(".collections__slide ")[i].style.display = "block"
            document.querySelectorAll(".categories__slide ")[i].style.display = "block"
            console.log(1)
        }
    } else {
        console.log(1)
        swiper()
    }
}

const swiper2 = () => {
    new Swiper(".collections-slider", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        modules: [Navigation, FreeMode],
        autoHeight: true,
        speed: 800,
        slidesPerView: 2.5,
        spaceBetween: 15,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
            1300: {
                spaceBetween: 42,
            },
            1080: {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            100: {
                slidesPerView: 2,
            },
        },
    })
}

const swiper3 = () => {
    new Swiper(".categories-slider", {
        modules: [Navigation, FreeMode],
        autoHeight: true,
        speed: 800,
        slidesPerView: 2,
        spaceBetween: 45,
        grabCursor: true,
        freeMode: true,
        breakpoints: {
            1300: {
                spaceBetween: 42,
            },
            1080: {
                slidesPerView: 2,
                spaceBetween: 42,
            },
            100: {
                slidesPerView: 1,
                spaceBetween: 42,
            },
        },
    })
}
detectDevice(swiper)
detectDevice(swiper2)
detectDevice(swiper3)

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
})
