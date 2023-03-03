import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import data from "./db.json" assert { type: "json" };

const router = new Router();
router
  .get("/", (context) => {
	context.response.body = "Welcome to the task API!";
  })
  .get("/api", (context) => {
	context.response.body = data;
  })
  .get("/api/:task", (context) => {
	if (context?.params?.task) {
	  const found = data.find(item => item.name.toLowerCase() === context.params.task.toLowerCase());
	  if (found) {
		context.response.body = found;
		} else {
		context.response.body = "No tasks found.";
	  }
	}
  });

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
