"use client";
import "../../globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/navbar";
import { getSession, SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Jaskaran Singh Bhalla",
//   description:
//     "Jaskaran Singh Bhalla's personal website. A final year student at IIT Delhi, interested in Computer Science and Entrepreneurship. i like to build things. I hail from Ludhiana and am currently based in New Delhi.",
// };

export default function RootLayout({ children }) {
  const session = getSession();
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <SessionProvider session={session}>
          <NavBar />
          <div className="flex-grow">
            <div className="h-32 max-h-full md:max-h-screen">
              <div className="flex flex-col h-screen justify-between">
                <div className="flex flex-col items-center mb-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
