// import Education from "./components/Education";
// import Courses from "./components/Courses";
// import Media from "./components/Media";
// import Skills from "./components/Skills";
import profileImage from "./assets/profile.jpeg"
function App() {
  var bgcolour = "#F6F3ED"
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div>
      <body>
        <div className="mx-auto py-5 text-black p-2 content-between justify-center flex" style={{ backgroundColor: bgcolour }}>
          <h1 className="text-3xl font-bold px-5 font-serif" >
            Jaskaran Singh Bhalla
          </h1>
        </div>
        <div style={{ backgroundColor: bgcolour, height: "90vh" }}>
          <div className=" flex justify-center content-between py-3">
            <img className="rounded-full" style={{ "height": "400px", width: "300px" }} src={profileImage} alt="Profile" />
          </div>
          <div className=" flex justify-center content-between px-5 mx-10 py-5 content-between" style={{ alignItems: 'center', }}>
            <p className="font-serif">
              Hey! I am Jaskaran Singh Bhalla, a B.Tech student at IIT Delhi.
              I harbor a deep fascination for Computer Science and the intricate world of software development.My endeavors are driven by a relentless pursuit of organized solutions and interconnected systems, as I believe in the power of efficiency and seamless integration.
              In addition to my academic pursuits, I nurture an entrepreneurial spirit and find solace in the immersive realm of gaming.
            </p>
          </div>
          <div className="flex justify-center content-between px-5 mx-10 py-5 content-between button">
            <div className="text-blue-500 font-bold py-2 mx-2 px-4 border border-blue-700 rounded" onClick={() => openInNewTab("mailto:jaskaransinghbhalla.mgsb@gmail.com")}>
              Email
            </div>
            <div className="text-green-600 font-bold py-2 mx-2 px-4 border border-green-700 rounded" onClick={() => openInNewTab("https://wa.me/+917009339534")}>
              Whatsapp
            </div>
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
