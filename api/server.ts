/* ❯ deno run --allow-env --allow-net --watch api/serve.ts
      testing with Curl  curl -X GET http://localhost:8000/tasks
*/
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import data from "./db.json" assert {type: "json"}

const port = 8000
const app = new Application()

const router = new Router()

router
  .get('/', (ctx) => {
    ctx.response.body = 'Welcome to the Task Server'
  })
  .get('/tasks', (ctx) => {
    ctx.response.body = data
  })
  .post('/tasks', (ctx) => {
    ctx.response.body = 'post tasks'
  })
  .put('/tasks', (ctx) => {
    ctx.response.body = 'put tasks'
  })
  .delete('/tasks', (ctx) => {
    ctx.response.body = 'delete task'
  })

app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener('listen', () => {
  console.log(`Server is Listening on localhost:${port}/tasks`)
})

await app.listen({ port })
