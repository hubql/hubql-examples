import { t } from "elysia";

export const Pet = t.Object({
    id: t.Numeric(),
    name: t.String(),
    age: t.Numeric(),
});

export const Store = t.Object({
    id: t.Numeric(),
    name: t.String(),
});

export const Order = t.Object({
    id: t.Numeric(),
    storeId: t.Numeric(),
    petId: t.Numeric(),
    status: t.String(),
});

export const User = t.Object({
    id: t.Numeric(),
    firstName: t.String(),
    lastName: t.String(),
});

