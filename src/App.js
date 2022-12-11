import Education from "./components/Education";
import Courses from "./components/Courses";
import Media from "./components/Media";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <body>
        Name : Jaskaran Singh Bhalla
        <br />
        Programme : B.Tech in Textile Technology,
        IIT Delhi
        <Education/>
        <Skills/>
        <Courses/>
        <Media/>
      </body>
    </div>
  );
}

export default App;
