import { Inter } from "next/font/google";
import "../../globals.css";
import NavBar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JS Bhalla",
  description: "Jaskaran Singh Bhalla's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
