import Education from "./components/Education";
import Courses from "./components/Courses";
import Media from "./components/Media";
import Skills from "./components/Skills";
import Navbar from "./components/Skills";
function App() {
  return (
    <div>
      <body>
        <div className="mx-auto bg-black text-white p-2 content-between">
          <h1 className="text-3xl font-bold">
            Jaskaran Singh Bhalla
          </h1>
        </div>

        <br />
        IIT Delhi
        <Navbar />
        <Education />
        <Skills />
        <Courses />
        <Media />
      </body>
    </div>
  );
}

export default App;
