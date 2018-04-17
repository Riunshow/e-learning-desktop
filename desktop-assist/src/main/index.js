import { app, BrowserWindow, ipcMain, remote } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}



let mainWindow
const winURL = process.env.NODE_ENV === 'development' ?
    `http://localhost:9080` :
    `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 700,
        useContentSize: true,
        width: 1200,
        titleBarStyle: 'hidden',
        webPreferences: { webSecurity: false },
    })



    // ipcMain.on('set-cookie', (event, arg) => {
    //     console.log('SET COOKIE E: ', event);
    //     console.log('SET COOKIE ARG: ', arg);
    //     mainWindow.webContents.session.cookies.set(arg,
    //         function(error, cookies) {
    //             if (error) throw error;
    //             console.log('Update Cookies!!!:', cookies);
    //         }
    //     );
    // });

    mainWindow.loadURL(winURL)


    // session.defaultSession.cookies.get({}, (error, cookies) => {
    //     console.log(6666666);

    //     console.log(error, cookies)
    // })

    // session.defaultSession.cookies.on('changed', function(event, cookie, cause, removed) {
    //     console.log(11111111);

    //     console.log(cookie.session);
    // });


    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */