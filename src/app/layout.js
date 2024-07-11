import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/reduxProvider/Providers";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import { ThemeProvider } from "@/lib/themeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={inter.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
