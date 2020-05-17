// 引入断言模块
// import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
// 方式一：从本地文件中引入
// import { assertEquals } from './source/source.ts'

// 方式二：建立引用的映射表文件
import { assertEquals } from 'testing/asserts.ts'

Deno.test("simple deno test", () => {
  let string = 'Name: Horace' + ', Age: 20'
  assertEquals(string, 'Name: Horace, Age: 20')
})

// deno test .\deno-test.ts