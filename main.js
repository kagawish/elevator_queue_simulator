/**
 * The application main entering point required by Electron.
 */
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
	var wind = new BrowserWindow({fullscreen: true});
       	wind.loadURL(`file://${__dirname}/views/index.html`);
});
