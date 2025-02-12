import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    cv: defineTable({
        user_token: v.string(),
        name: v.string(),
        tel: v.string(),
        email: v.string(),
    }),
});
