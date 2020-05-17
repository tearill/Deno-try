const dir = Deno.readDirSync(Deno.cwd())

for (const file of dir) {
  // console.log(file)
  let tmpFile = await Deno.open(file.name)
  // console.log(tmpFile)
  await Deno.copy(tmpFile, Deno.stdout); // 打印到标准输出流
  tmpFile.close(); // 关闭文件
}

let http = Deno.readFileSync(Deno.cwd() + '/http.ts')
console.log(http) // Uint8Array
let content = new TextDecoder().decode(http); // 解码文件内容
// console.log(content)