import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const CheckAndCreateCV = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error("Not authenticated");
        }
        const cv = await ctx.db
            .query("cv")
            .filter((q) => q.eq(q.field("user_token"), identity.tokenIdentifier))
            .unique();
        if (cv !== null) {
            return cv;
        }

        const newCVId = await ctx.db.insert("cv", {
            name: "",
            email: "",
            tel: "",
            user_token: identity.tokenIdentifier,
        });
        return await ctx.db.get(newCVId);
    },
});

export const setGeneralInfo = mutation({
    args: { name: v.string(), tel: v.string(), email: v.string() },
    handler: async (ctx, { name, tel, email }) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error("Not authenticated");
        }
        const cv = await ctx.db
            .query("cv")
            .filter((q) => q.eq(q.field("user_token"), identity.tokenIdentifier))
            .unique();
        if (cv === null) {
            throw new Error("No CV for this user");
        }

        ctx.db.patch(cv._id, { name, tel, email });
    },
});

export const getGeneralInfo = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (identity === null) {
            throw new Error("Not authenticated");
        }
        const cv = await ctx.db
            .query("cv")
            .filter((q) => q.eq(q.field("user_token"), identity.tokenIdentifier))
            .unique();
        if (cv === null) {
            return { name: "", email: "", tel: "" };
        }
        return { name: cv.name, tel: cv.tel, email: cv.email };
    },
});
