import webp from "gulp-webp"
import imagemin from "gulp-imagemin"

export const images = () => {
    return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'IMAGES',
            message: 'Error: <%= error.message %>'
        })
    ))
    // Обрабатывает те фото, которые изменились или которых не было
    .pipe(app.plugins.newer(app.path.build.images))
    
    .pipe(app.plugins.if(
        app.isBuild, webp()
    ))
    .pipe(app.plugins.if(
        app.isBuild, app.gulp.dest(app.path.build.images)
    ))
    .pipe(app.plugins.if(
        app.isBuild, app.gulp.src(app.path.src.images)
    ))
    .pipe(app.plugins.if(
        app.isBuild, app.plugins.newer(app.path.build.images)
    ))
    .pipe(app.plugins.if(
        app.isBuild, imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 to 7 - от нуля до 7, это насколько нужно сжимать изображение
        })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream())

}