import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
