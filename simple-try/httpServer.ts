// 创建 http 服务监听端口
import { serve } from "http/server.ts"

const body = new TextEncoder().encode("Hello Horace\n")
for await (const req of serve(":8080")) {
  req.respond({ body })
}

// deno run --unstable --allow-net --importmap=importMap.json .\httpServer.ts