const { contextBridge } = require('electron');

// 向渲染进程暴露安全 API
contextBridge.exposeInMainWorld('myApi', {
  sayHello: () => 'Hello from Electron!',
});