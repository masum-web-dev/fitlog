import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Global component/Navbar";
import Footer from "./Global component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fitlog",
  description: "Train With Invent",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
