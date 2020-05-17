import { Response } from 'https://deno.land/x/oak/mod.ts'

// 制约参数类型
export default async (
  { response }: { response: Response },
  next: () => Promise<void>
) => {
  try {
    await next()
  } catch (err) {
    response.status = 500
    console.log(err)
    response.body = { msg: err.message }
  }
}
