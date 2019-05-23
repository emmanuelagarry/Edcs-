const { app, BrowserWindow } = require('electron')

let win;

function startWindow() {

  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    // icon: `file://${_dirname}/dist/edcs-electron/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/edcs-electron/index.html`)

  // win.webContents.openDevTools()

  win.on('closed', function () {
    win = null
  })
}


app.on('ready', startWindow)

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit()
  }

})

app.on('activate', function () {
  if (win === null) {
    createWindow()
  }
})
