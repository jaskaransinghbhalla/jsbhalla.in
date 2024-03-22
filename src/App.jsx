import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="font-mono">
      <div className="sticky top-0 backdrop-blur-sm ">
        <NavBar />
      </div>
      <MainBody />
      <Footer />
    </div>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}