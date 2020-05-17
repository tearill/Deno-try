// 1. 取得第一个命令行参数，存储到变量 url
// 2. 向指定的地址发出请求，等待响应，然后存储到变量 res
// 3. 把响应体解析为一个 ArrayBuffer，等待接收完毕，将其转换为 Uint8Array，最后存储到变量 body
// 4. 把 body 的内容写入标准输出流 stdout

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);
// deno run http.ts https://www.baidu.com -> 返回一个关于网络权限的错误
//! error: Uncaught PermissionDenied: network access to "https://www.baidu.com/", run again with the --allow-net flag
// Deno 默认用安全环境执行代码。需要显式赋予程序权限，允许它进行一些特权操作，比如网络访问
// deno run --allow-net=www.ihorace.cn http.ts http://www.ihorace.cn
