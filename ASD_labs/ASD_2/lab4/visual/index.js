import { app, BrowserWindow} from 'electron';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        heigth: 700,
    });

    win.loadFile('visual.html');
}

app.whenReady().then(() => {
    createWindow();
})