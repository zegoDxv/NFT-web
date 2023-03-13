// Основной модуль
import gulp from "gulp"
// Импорт путей
import {path} from "./gulp/config/path.js"
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"

// Передаем значения в глобальную перменную "app"

global.app = {
    // Если переменная хранит в себе флаг --build, значит это режим продакшена
    isBuild: process.argv.includes('--build'),
    // Если у переменной нет флага --build, значит это режим разработки
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Импорт задач

import {copy} from "./gulp/tasks/copy.js"
import {reset} from "./gulp/tasks/reset.js"
import {html} from './gulp/tasks/html.js'
import {server} from './gulp/tasks/server.js'
import {scss} from "./gulp/tasks/scss.js"
import {js} from "./gulp/tasks/js.js"
import {images} from "./gulp/tasks/images.js"
import { otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js"
import { svgSprive } from "./gulp/tasks/svgsprite.js"
import { zip } from "./gulp/tasks/zip.js"
import { ftp } from "./gulp/tasks/ftp.js"

// Наблюдатель за изменениями в файлах
function watcher(){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html) // если хотим чтобы при каждом изменении все грузилось на удаленные сервер, от нужно каждое действие поместить в gulp как здесь - gulp.series(html, ftp)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.src.images, images)

}

export {svgSprive}

// Последовательная обработка шрифтов 

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

// Основные задачи
const mainTasks = gulp.parallel(fonts,html,copy, scss, js, images)

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

// Эскпорт сценариев

export { dev }
export { build }
export { deployZIP }
export { deployFTP }

// Выполнение сценария по умолчанию. Именно 'default' дает нам сделать сценарий по умолчанию
gulp.task("default", dev)
