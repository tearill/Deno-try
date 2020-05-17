fetch("http://www.ihorace.cn/interview/catelog.html")
  // .then(res => res.json())
  .then(async res => {
    let body = new Uint8Array(await res.arrayBuffer())
    await Deno.stdout.write(body);
  })
  // .then(data => {
  //   console.log(data)
  // })

// 获取数据
// fetch('http://jsonplaceholder.typicode.com/posts/1')
// .then((res) => res.json())
// .then((data) => {
// 	console.log(data)
// })
