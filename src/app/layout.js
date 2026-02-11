import "../styles/globals.css";
import "./custom.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TotalContext from "@/context";
import SideBar from "@/components/layout/SideBar";
import Modal from "@/components/layout/Modal";
import MobileMenu from "@/components/layout/MobileMenu";
import { Pinyon_Script } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Montserrat } from "next/font/google";


// const pinyonScript = Pinyon_Script({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-pinyon-script",
// });
const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
});
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});


export const metadata = {
  //Default Title
  title: "Les arts graphiques",
  description:
    //Default Description
    "De l’étude à la réalisation finale, notre équipe d'experts s'engage à chaque étape du processus, assurant une attention méticuleuse aux détails et un niveau de précision inégalé.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "favicon.ico",
      url: "/favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${cormorantGaramond.variable} ${montserrat.variable}`}>
        <TotalContext>
          <SideBar />
          <Modal />
          <MobileMenu />
          <Header />
          <main>{children}</main>
          <Footer />
        </TotalContext>
      </body>
    </html>
  );
}
