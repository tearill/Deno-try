// import * as path from 'https://deno.land/std/node/path.ts'

// console.log(path)
// console.log(Deno.cwd())
//! deno run import.ts 会报错 
//! Uncaught PermissionDenied: read access to "E:\Deno-try\simple-try", run again with the --allow-read flag
// 使用权限 --allow-read

// import { white, bgGreen } from "https://deno.land/std/fmt/colors.ts";
// console.log(bgGreen(white("Hello, Horace"))); // 背景红色字体白色

const file = await Deno.create("./foo.txt");
console.log(file);

console.log(window === globalThis)