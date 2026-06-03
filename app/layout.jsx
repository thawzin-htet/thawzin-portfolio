import {JetBrains_Mono} from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", 
  "300", "400", "500", "600", "700", "800"],
variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Thaw Zin Htet | Portfolio",
  description: "Personal portfolio website",
  icons :{
    icon : "/icon.jpg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${jetBrainsMono.variable} font-primary bg-[#1c1c22] text-white`}>
        <Header />
        <StairTransition/>
       <PageTransition>
        <div className="container mx-auto px-4 md:px-8"></div>
        {children}</PageTransition>
        </body>
    </html>
  );
}