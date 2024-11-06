import "../../globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaskaran Singh Bhalla",
  description:
    "Jaskaran Singh Bhalla's personal website. A final year student at IIT Delhi, interested in Computer Science and Entrepreneurship. i like to build things. I hail from Ludhiana and am currently based in New Delhi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar />
        <div className="flex-grow">
          <div className="h-32 max-h-full md:max-h-screen">
            <div className="flex flex-col h-screen justify-between">
              <div className="flex flex-col items-center mb-8">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
