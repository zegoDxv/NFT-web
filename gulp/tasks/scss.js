import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"

import cleanCss from "gulp-clean-css" // Сжатие CSS файла
import webpCss from "gulp-webpcss" // Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer" // добавление  вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries" // Группировка медиа запросов

const sass = gulpSass(dartSass)

export const scss = () => {
    return (
        app.gulp
            .src(app.path.src.scss, {sourcsemaps: app.isDev})
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "SCSS",
                        message: "Error <%= error.message %>",
                    })
                )
            )
            .pipe(app.plugins.replace(/@img\//g, "../img/"))
            // компиляция
            .pipe(
                sass({
                    outputStyle: "expanded",
                })
            )
            //
            .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    webpCss({
                        webpClass: ".webp",
                        noWebpClass: ".no-webp",
                    })
                )
            )
            // autoprefixer
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    autoprefixer({
                        grid: true,
                        overrideBrowserslist: ["last 3 versions"],
                        cascase: true,
                    })
                )
            )
            // Расскоментировать строчку кода ниже, если нужен файл не сжатый css файл
            .pipe(app.gulp.dest(app.path.build.css))
            // Сжатие css файла
            .pipe(app.plugins.if(app.isBuild, cleanCss()))
            .pipe(
                rename({
                    extname: ".min.css",
                })
            )
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browsersync.stream())
    )
}
