import webpack from "webpack"
import gulpWebpack from "webpack-stream"

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev})
    .pipe(app.plugins.plumber(
        app.plugins.notify({
            title: 'JS',
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(gulpWebpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
            filename: 'app.min.js',
        }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}