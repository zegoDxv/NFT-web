// Получаем имя папки нашего проекта
import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve())

// Путь к папке с результатом
const buildFolder = `./dist`

// Путь к папке с исходниками
const srcFolder = `./src`

// объект path в котором будет храниться вся информация о пути

export const path = {
    build: {
        fonts: `${buildFolder}/fonts/`,
        images: `${buildFolder}/img/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        svg: `${srcFolder}/img/**/*.svg`,
        images: `${srcFolder}/img/**/*`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        images: `${srcFolder}/img/**/*`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    // Указываю название папки на удаленном сервере в которой будет проект
    ftp: `test`,
}
