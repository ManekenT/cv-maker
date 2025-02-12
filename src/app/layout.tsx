import type { Metadata } from "next";
import { Archivo_Narrow, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const title = Archivo_Narrow({
    variable: "--font-title",
    subsets: ["latin"],
});

export const text = Source_Sans_3({
    variable: "--font-text",
    subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
    title: "CV Maker",
    description: "Easy CV creation tool",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${title.variable} ${text.variable} font-text antialiased`}>
                <ConvexClientProvider>{children}</ConvexClientProvider>
            </body>
        </html>
    );
}
