import {  Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Navigation/Header"
import { Mail } from "lucide-react";
import Link from "next/link";
import Footer from "@/app/components/Navigation/Footer"

const inter = Inter({ 
  subsets: ["latin"] });

export const metadata = {
  title: "London Atwell - A Template by Phoenix Interface",
  description: "A resume website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter} scroll-smooth text-sm tracking-wide xl:max-w-3xl lg:max-3xl w-11/12 mx-auto bg-secondary relative`}>
        <div className="relative max-w-5xl mx-auto">
          <header className="sticky bg-secondary pb-0 top-0 z-[1000] pt-[24px] ">
            <Header />
          </header>
        <main className="min-h-screen pb-20">{children}</main>
        </div>
        <Link href={"mailto:"}  className="fixed text-white bg-dark top-auto bottom-4 right-4 h-[56px] w-[56px] rounded-full flex flex-col items-center justify-center">
          <Mail className="w-5 h-5 " aria-hidden="true" strokeWidth={1.5}/>
                
                </Link>
                <footer>
                  <Footer />
                </footer>
        </body>
    </html>
  );
}
