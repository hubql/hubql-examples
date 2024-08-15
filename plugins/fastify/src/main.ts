import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";

import { z } from "zod";

import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import hubqlClient from "@hubql/fastify";

const app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "SampleApi",
      description: "Sample backend service",
      version: "1.0.0",
    },
    servers: [],
  },
  transform: jsonSchemaTransform,
});
app.get("/swagger/json", {}, async (request, reply) => {
  reply.send(app.swagger());
});
app.register(hubqlClient, {
  hubqlPath: "/",
  openAPIDoc: {
    url: "/swagger/json",
  },
});

const LOGIN_SCHEMA = z.object({
  username: z.string().max(32).describe("Some description for username"),
  password: z.string().max(32),
});

app.after(() => {
  app.withTypeProvider<ZodTypeProvider>().route({
    method: "POST",
    url: "/login",
    schema: { body: LOGIN_SCHEMA },
    handler: (req, res) => {
      res.send("ok");
    },
  });
});

async function run() {
  await app.ready();

  await app.listen({
    port: 4949,
  });

  console.log(`Hubql running at http://localhost:4949/`);
}

run();
