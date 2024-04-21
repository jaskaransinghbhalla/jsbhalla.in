
import Watchlog from "./pages/Watchlog";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Learning from "./pages/Learning";

export default function App() {

  return (
    <>
      <div className="font-sans">
        <div className="h-32 max-h-full md:max-h-screen">
          <div className="flex flex-col h-screen justify-between">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/watchlog" element={<Watchlog />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/learning" element={<Learning />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  )
}

