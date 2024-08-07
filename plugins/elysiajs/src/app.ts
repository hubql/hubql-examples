import Elysia from "elysia";
import { petsController } from "./routes/pets";
import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";
import { hubqlClient } from "@hubql/elysia";
import { storesController } from "./routes/stores";
import { usersController } from "./routes/users";


export const app = new Elysia({ aot: false })
  .use(
    swagger({
      provider: "swagger-ui",
      documentation: {
        servers: [
          {
            url: 'https://hubql-elysia-demo.hubql.workers.dev',
            description: "Petstore Demo API",
          },
        ],
      },
    })
  )
  .use(cors())
  .onError(({ code, error }) => {
    console.error(error);
    return new Response(JSON.stringify({ error: error ?? code }), {
      status: 500,
    });
  })
  .use(petsController)
  .use(storesController)
  .use(usersController)
  .use(
    hubqlClient({
      openAPIDoc: {
        url: "/swagger/json",
      },
    })
  ).get("/", () => "Hello from Hubql!");
