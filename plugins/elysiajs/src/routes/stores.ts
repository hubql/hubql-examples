import { Elysia, t } from "elysia";
import { Order, Pet, Store } from "../types";


export const storesController = new Elysia({ prefix: "/stores" })
  .get(
    "/:storeId",
    (context) => {
      const {
        params: { storeId },
      } = context;

      return {
        data: {
          id: Number(storeId),
          name: "Store",
        },
      };
    },
    {
      detail: {
        tags: ["Stores"],
      },
      response: t.Object({
        data: Store
      }),
      params: t.Object({
        storeId: t.Numeric(),
      }),
    }
  )
  .get(
    "/:storeId/inventory",
    (context) => {
      const {
        params: { storeId },
      } = context;

      return {
        data: {
          id: Number(storeId),
          pets: [
            {
              id: 1,
              name: "Felix",
              age: 5,
            },
            {
              id: 2,
              name: "Max",
              age: 3,
            }
          ],
        },
      };
    },
    {
      detail: {
        tags: ["Stores"],
      },
      response: t.Object({
        data: t.Object({
          id: t.Numeric(),
          pets: t.Array(
            Pet
          ),
        }),
      }),
      params: t.Object({
        storeId: t.Numeric(),
      }),
    }
  )
  .get(
    "/:storeId/orders",
    (context) => {
      const {
        params: { storeId },
      } = context;

      return {
        data: {
          id: Number(storeId),
          orders: [
            {
              id: 1,
              storeId,
              petId: 1,
              status: "pending",
            },
            {
              id: 2,
              storeId,
              petId: 2,
              status: "completed",
            }
          ],
        },
      };
    },
    {
      detail: {
        tags: ["Stores"],
      },
      response: t.Object({
        data: t.Object({
          id: t.Numeric(),
          orders: t.Array(
            Order
          ),
        }),
      }),
      params: t.Object({
        storeId: t.Numeric(),
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
        tags: ["Stores"],
      },
      response: t.Object({
        data: Store
      }),
      body: t.Object({
        name: t.String(),
      }),
    }
  );
