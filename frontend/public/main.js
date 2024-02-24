const path = require('path');
const {app, BrowserWindow, nativeImage} = require("electron");
const isDev = require('electron-is-dev');

function createWindow() {
    console.log(__dirname);
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        // icon: iconImage,
    });

    win.setIcon(path.join(__dirname, "/WaveMusic_Logo.ico"));

    win.loadURL(
        isDev 
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );

    if (isDev) {
        win.webContents.openDevTools({mode: 'detach'});
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});