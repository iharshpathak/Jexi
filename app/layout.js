import { Syne } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
import { Toaster } from "@/components/ui/sonner"

const SyneFont = Syne({
  variable: "--Syne-font",
  subsets: ["latin", "latin-ext", "greek"],
});

export const metadata = {
  title: "Jexi",
  description: "Your Smart Taxi !",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${SyneFont.variable} 
      min-h-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] flex flex-col`}
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
