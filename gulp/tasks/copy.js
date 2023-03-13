// Добавляю запись export чтобы мы могли экспоритировать эту функцию

export const copy = () => {
    // Получаю файлы исходников
    return (
        app.gulp
            .src(app.path.src.files)
            // Переношу эти файлы в build - dist
            .pipe(app.gulp.dest(app.path.build.files))
    )
}
