import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import Providers from "./providers";
config.autoAddCss = false;

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "REST Countries API",
  description: "REST Countries API with color theme switcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-veryLightGray ${nunitoSans.className}`}>
        <Header />
        <main className="container mx-auto text-veryDarkBlue-lightText">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
