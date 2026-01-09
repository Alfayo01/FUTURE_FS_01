import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FilePicker from "@/components/FilePicker";
import Profile from "@/components/Profile";
import ProgressBar from "@/components/ProgressBar";
import Technology from "@/components/Technology";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resume Portfolio",
  description: "Victor Opoti Resume Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
                <Profile/>
                <FilePicker/>
                  <Technology>
                  <ProgressBar/>
                </Technology>
      </body>
    </html>
  );
}
