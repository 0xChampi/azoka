import type { Metadata } from "next";
import { Antonio, Inter } from "next/font/google";

import "./globals.css";
import smoothscroll from "smoothscroll-polyfill";

const inter = Inter({ subsets: ["latin"] });
const antonio = Antonio({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "magaman",
  description: "magaman",
  icons: "/wac",


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" " lang="en">
              <meta property="og:image" content="/about/opengraph-image.png" />
        <meta name="twitter:image" content="/about/twitter-image.png" />
      <body className={inter.className}>
        <div className={antonio.className}>{children}</div>
      </body>
    </html>
  );
}
