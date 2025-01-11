const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 可选
      contextIsolation: true, // 增强安全性
    },
  });

  // 加载 Svelte 应用
  mainWindow.loadFile(path.join(__dirname, 'public/index.html')); // 构建后输出的 HTML 文件
});

// 退出事件
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
