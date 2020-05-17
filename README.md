# Deno-try  
Deno 学习尝试  
windows 安装 `iwr https://deno.land/x/install/install.ps1 -useb -outf install.ps1; .\install.ps1 v1.0.0`  
- VSCode 插件安装  
  import url 形式以及 Deno 对象在 VSCode 中支持不够，需要配合 Deno 插件进行支持  
  配置：  
    1. 在总的 settings.json 中配置  
      `"deno.enable": true`  
    2. 在自己的工作目录下新建文件 .vscode/settings.json  
      文件内容：  
      ```json
      {
        "deno.enable": true
      }
      ```
    个人推荐使用第二种局部配置，虽然比较麻烦，第一种全局配置会让其他工作目录下的文件提示各种错误，因为 Deno 的编译被应用到了所有文件中，个人感觉使用起来不是很舒服  

- 常用指令  
  deno bundle：将脚本和依赖打包  
  deno eval：执行代码  
  deno fetch：将依赖抓取到本地  
  deno fmt：代码的格式美化  
  deno help：等同于-h参数  
  deno info：显示本地的依赖缓存  
  deno install：将脚本安装为可执行文件  
  deno repl：进入 REPL 环境  
  deno run：运行脚本  
  deno test：运行测试  

- 天生支持 typescript  
  运行时自动识别 ts 文件进行编译成 js 后运行，开箱即用  
  运行方式 `deno run [filename].[ext]`  

- Deno 默认用安全环境执行代码，所以需要显式赋予程序权限，允许它进行一些特权操作，比如网络访问  
  举例：  
  ```ts
  const url = Deno.args[0];
  const res = await fetch(url);

  const body = new Uint8Array(await res.arrayBuffer());
  await Deno.stdout.write(body);
  ```
  使用 `deno run http.ts https://www.baidu.com` 运行 -> 返回一个关于网络权限的错误 `error: Uncaught PermissionDenied: network access to "https://www.baidu.com/", run again with the --allow-net flag`  
  正确运行方式 `deno run --allow-net=www.baidu.com http.ts https://www.baidu.com`  

- 权限  
  --allow-read：打开读权限，可以指定可读的目录  
  --allow-write：打开写权限  
  --allow-net=google.com：允许网络通信，可以指定可请求的域，比如--allow-net=www.ihorace.cn  
  --allow-env：允许读取环境变量  

- Deno 读取一个目录  
  内置 API  
  `Deno.readDirSync(Deno.cwd())`  

- Deno 文件操作  
  读取文件：`Deno.readFileSync`  
  解码文件内容：`new TextDecoder().decode()`  

- Deno 引入的本地缓存  
  引入下载过的资源会被缓存在本地 `C:\Users\MI\AppData\Local\deno\deps\https\deno.land`  
  1. 从本地的文件中将引用的模块导出  
    source/source.ts  
    `export { assertEquals } from "https://deno.land/std/testing/asserts.ts"`  
    deno-test.ts  
    `import { assertEquals } from './source/source.ts'`  
  2. 建立映射表  
    建立一个 JSON 文件  
    ```js
    // importMap.json
    {
      "imports": {
        "testing/": "https://deno.land/std/testing/"
      }
    }
    ```
    在需要引入的文件中，例如  
    deno-test.ts  
    `import { assertEquals } from 'testing/asserts.ts'`  
    运行的时候指定映射表 `deno test --unstable --importmap=importMap.json deno-test.ts`  
    (importmap 的方式必须开始 unstable 模式)  
