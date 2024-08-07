import { Elysia, t } from "elysia";
import { Pet } from "../types";


export const petsController = new Elysia({ prefix: "/pets" })
  .get(
    "/:petId",
    (context) => {
      const {
        params: { petId },
      } = context;

      return {
        data: {
          id: Number(petId),
          name: "Felix",
          age: 5,
        },
      };
    },
    {
      detail: {
        tags: ["Pets"],
      },
      response: t.Object({
        data: Pet
      }),
      params: t.Object({
        petId: t.Numeric(),
      }),
    }
  )
  .post(
    "/",
    (context) => {
      const { body } = context;
      return {
        data: {
          id: 1,
          ...body,
        },
      };
    },
    {
      detail: {
        tags: ["Pets"],
      },
      response: t.Object({
        data: Pet
      }),
      body: t.Object({
        name: t.String(),
        age: t.Numeric(),
      }),
    }
  )
  .patch(
    "/:petId",
    async (context) => {
      const { body, params } = context;
      return {
        data: {
          id: Number(params.petId),
          name: body.name ?? "Felix",
          age: body.age ?? 5,
        },
      };
    },
    {
      detail: {
        tags: ["Pets"],
      },
      params: t.Object({
        petId: t.Numeric(),
      }),
      body: t.Object({
        name: t.Optional(t.String()),
        age: t.Optional(t.Numeric()),
      }),
      response: t.Object({
        data: Pet
      }),
    }
  )
  .delete(
    "/:petId",
    () => {
      return {
        message: "Pet deleted",
      };
    },
    {
      detail: {
        tags: ["Pets"],
      },
      response: t.Object({
        message: t.String(),
      }),
      params: t.Object({
        petId: t.Numeric(),
      }),
    }
  );
