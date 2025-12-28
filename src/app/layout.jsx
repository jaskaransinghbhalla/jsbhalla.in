import "../../globals.css";
import NavBar from "../components/layout/navbar";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Jaskaran Singh Bhalla",
  description:
    "Jaskaran Singh Bhalla's personal website. A final year student at IIT Delhi, interested in Computer Science and Entrepreneurship. i like to build things. I hail from Ludhiana and am currently based in New Delhi.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={` flex flex-col min-h-screen`}>
          <NavBar />
          <Analytics/>
          <main className="flex-grow w-full">
            {children}
          </main>
      </body>
    </html>
  );
}
