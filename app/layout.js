import "./globals.css";
import Layout from "@/components/layout";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Sayyad Mahammad",
  description: "This is my portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Playwrite+TZ+Guides&display=swap"
          rel="stylesheet"
        />
      </head> */}
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
