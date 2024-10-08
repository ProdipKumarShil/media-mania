import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/themeProvider";
import AuthProvider from "@/lib/SessionProvider/AuthProvider";
import { ReduxProvider } from "@/lib/reduxProvider/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Media Mania",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en"  >
      <body className={inter.className}>
        <AuthProvider>
          <ReduxProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
              {children}
              <Toaster />
            </ThemeProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
