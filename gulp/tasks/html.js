// Добавляю npm пакет для сборки html из всех частей
import fileinclude from "gulp-file-include"
// Добавляю пакет который позволяет уменьши размер image не теряя его качество
import webpHtmlNosvg from "gulp-webp-html-nosvg"
// Добавляю пакет который помогает избежать неприятных ситуации с хешированием
import versionNumber from "gulp-version-number"

// Добавляю запись export чтобы мы могли экспоритировать эту функцию
export const html = () => {
    // Получаю файлы исходников
    return (
        app.gulp
            .src(app.path.src.html)
            .pipe(
                // Через плагин plumber при ошибке галп не будет переставать работать
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "HTML",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            // Пайпом запускаю действие пакета
            .pipe(fileinclude())
            // заменяю @img/ на img/
            .pipe(app.plugins.replace(/@img\//g, "img/"))
            // Сжимаю картинки
            .pipe(app.plugins.if(
                app.isBuild, webpHtmlNosvg()
            ))
            // Плагин version number
            .pipe(app.plugins.if(
                app.isBuild,
                versionNumber({
                    value: "%DT%",
                    append: {
                        key: "_v",
                        cover: 0,
                        to: ["css", "js"],
                    },
                    output: {
                        file: "gulp/version.json",
                    },
                })
            )
            )
            // Переношу эти файлы в build - dist
            .pipe(app.gulp.dest(app.path.build.html))
            // Обновление в браузере при изменении нашего html
            .pipe(app.plugins.browsersync.stream())
    )
}
