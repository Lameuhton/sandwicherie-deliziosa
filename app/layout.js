import { Inria_Sans, Onest } from "@next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";

// Import de Inria Sans avec toutes les épaisseurs et variantes disponibles
const inriaSans = Inria_Sans({
  weight: ['300', '400', '700'], // Toutes les épaisseurs disponibles pour Inria Sans
  subsets: ['latin'], // Les subsets que tu veux charger (par exemple 'latin')
  style: ['normal'], // Charger normal et italic
});

// Import de Onest avec toutes les épaisseurs disponibles
const onest = Onest({
  weight: ['200', '300', '400', '500', '600', '700'], // Toutes les épaisseurs disponibles pour Onest
  subsets: ['latin'],
  style: ['normal'], // Charger normal et italic
  display: 'swap',
});

//Metadata
export const metadata = {
  title: "My website", // Update me
  description: "Description of my incredible website", // Update me
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inriaSans.className} ${onest.className}`}>
        <Header /> {/* Header */}
        {children}{" "}
        {/* 'children' represents the specific content of page.js for each page */}
        <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
