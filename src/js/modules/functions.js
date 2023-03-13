// Проверка поддержки webp, добавление класса webp или но no-webp для HTML
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image()
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2)
        }
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }
    // Добавление класс _webp или _no-webp для HTML
    testWebP(function (support) {

        if (support == true) {
        document.querySelector('html').classList.add('webp');
        }else{
        document.querySelector('html').classList.add('no-webp');
        }
        })
}
