"use client";

import CVPage from "@/cvPage";
import { SignInButton } from "@clerk/clerk-react";
import { Unauthenticated, Authenticated } from "convex/react";

export default function Home() {
    return (
        <>
            <Unauthenticated>
                <SignInButton />
            </Unauthenticated>
            <Authenticated>
                <CVPage></CVPage>
            </Authenticated>
        </>
    );
}
