import {confiFTP} from "../config/ftp.js"
import vinylFTP from "vinyl-ftp"
import util from "gulp-util"

export const ftp  = () => {
    // Вывод состояния наших дел
    confiFTP.log  = util.log
    // Создаю константу в которой создаю подключение 
    const ftpConnect = vinylFTP.create(confiFTP)
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "FTP",
            message: "Error: <%= error.message %>"
        })
    ))
    // Обращаюсь к константе ftpConnect и указываю путь к удаленному серверу и добавляю название нашей root папки
    .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
}