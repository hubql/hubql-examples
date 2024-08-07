import { Elysia, t } from "elysia";
import { User } from "../types";

export const usersController = new Elysia({ prefix: "/users" })
    .get(
        "/:userId",
        (context) => {
            const {
                params: { userId },
            } = context;

            return {
                data: {
                    id: Number(userId),
                    firstName: "John",
                    lastName: "Doe",
                },
            };
        },
        {
            detail: {
                tags: ["Users"],
            },
            response: t.Object({
                data: User
            }),
            params: t.Object({
                userId: t.Numeric(),
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
                tags: ["Users"],
            },
            response: t.Object({
                data: User
            }),
            body: t.Object({
                firstName: t.String(),
                lastName: t.String(),
            }),
        }
    )
    .patch(
        "/:userId",
        async (context) => {
            const { params } = context;
            return {
                data: {
                    id: Number(params.userId),
                    firstName: "John",
                    lastName: "Doe",
                    ...params
                },
            };
        },
        {
            detail: {
                tags: ["Users"],
            },
            params: t.Object({
                userId: t.Numeric(),
            }),
            body: t.Object({
                firstName: t.Optional(t.String()),
                lastName: t.Optional(t.String()),
            }),
            response: t.Object({
                data: User
            }),
        }
    )

