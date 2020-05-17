import { Application } from "https://deno.land/x/oak/mod.ts"
import errorHandler from './middlewares/handleError.ts'
import router from './routes/index.ts'

const app = new Application()

app.use(errorHandler)
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen(':3000')