import { Router, Response } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()

router.get('/', ({response} : {response: Response}) => {
  response.body = new TextEncoder().encode("Hello Horace\n")
})

// router.get('/comments', getComments)
// router.post('/publish', publishComment)

export default router
