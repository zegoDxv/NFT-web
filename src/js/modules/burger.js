if (window.innerWidth < 770) {
    console.log("burger woriking")
    const burgerTrigger = document.querySelector(".header__burger"),
        burgerClose = document.querySelector(".header__burger--close"),
        burgerItem = document.querySelector(".header__inner"),
        body = document.querySelector("body")

    function toggleBurger() {
        burgerTrigger.classList.toggle("active")
        burgerItem.classList.toggle("active")
        body.classList.toggle("active")
        burgerClose.classList.toggle("active")
    }

    burgerTrigger.addEventListener("click", function (e) {
        toggleBurger()
    })

    function closeBurger() {
        toggleBurger()
    }

    const links = document.querySelectorAll(".header__link")
    links.forEach((item) => {
        item.addEventListener("click", function () {
            closeBurger()
        })
    })

    burgerClose.addEventListener("click", closeBurger)
}
