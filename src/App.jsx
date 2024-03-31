import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

export default function App() {
  function requestDesktop() {
    document.getElementsByTagName('meta')['viewport'].content = 'width= 1440px'
  }
  return (
    <div className="font-mono">
      <div className="hidden lg:block h-32 max-h-full md:max-h-screen">
        <div className="flex flex-col h-screen justify-between">
          <div className="sticky top-0 backdrop-blur-sm "><header><NavBar /></header></div>
          <main className="mb-auto"><MainBody /></main>
          <footer><Footer /></footer>
        </div>
      </div>
      <div className="lg:hidden flex flex-col items-center m-6 justify-center max-w-96">
        <div className="text-wrap text-center m-5">
          Sorry, The Website is not responsive for mobile devices.
        </div>
        <div className="text-wrap text-center m-5">
          Please use a desktop or laptop to view the website.
        </div>
        <div className="m-8">
          <button className="border border-slate-600 p-3 bg-slate-300" onClick={() => requestDesktop()}>Request Desktop Site</button>
        </div>
      </div>
    </div>
  )
}