import { Geist, Geist_Mono, Figtree } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";

// HelveticaNeue Fonts
const helveticaRegular = localFont({
  src: "../public/fonts/HelveticaNeue-Roman.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-helvetica-regular",
});

const helveticaBold = localFont({
  src: "../public/fonts/HelveticaNeue-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-helvetica-bold",
});

const helveticaSemiBold = localFont({
  src: "../public/fonts/HelveticaNeue-Medium.woff2",
  weight: "600",
  style: "normal",
  variable: "--font-helvetica-semibold",
});

const helveticaLight = localFont({
  src: "../public/fonts/HelveticaNeue-Light.woff2",
  weight: "300",
  style: "normal",
  variable: "--font-helvetica-light",
});

const helveticaThin = localFont({
  src: "../public/fonts/HelveticaNeue-Thin.woff2",
  weight: "200",
  style: "normal",
  variable: "--font-helvetica-thin",
});

// Italic Variants
const helveticaRegularItalic = localFont({
  src: "../public/fonts/HelveticaNeueItalic.woff2",
  weight: "400",
  style: "italic",
  variable: "--font-helvetica-regular-italic",
});

const helveticaBoldItalic = localFont({
  src: "../public/fonts/HelveticaNeueBoldItalic.woff2",
  weight: "700",
  style: "italic",
  variable: "--font-helvetica-bold-italic",
});

const helveticaLightItalic = localFont({
  src: "../public/fonts/HelveticaNeueLightItalic.woff2",
  weight: "300",
  style: "italic",
  variable: "--font-helvetica-light-italic",
});

const helveticaThinItalic = localFont({
  src: "../public/fonts/HelveticaNeueThinItalic.woff2",
  weight: "200",
  style: "italic",
  variable: "--font-helvetica-thin-italic",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});



export const metadata = {
  title: "Kazi Afya",
  description: " Empowering Work, Enhancing Wellness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className={` ${helveticaRegular.variable} ${helveticaBold.variable} ${helveticaSemiBold.variable} ${helveticaLight.variable} ${helveticaThin.variable} ${helveticaRegularItalic.variable} ${helveticaBoldItalic.variable} ${helveticaLightItalic.variable} ${helveticaThinItalic.variable}`}>
      <head> 
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}


