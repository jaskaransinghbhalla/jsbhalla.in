import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";

export default function App() {
  
  return (
    <div className="font-mono">
      
        <div className="flex flex-col h-screen justify-between">
          <div className="sticky top-0 backdrop-blur-sm "><NavBar /></div>
        </div>
        <main className="mb-auto"><MainBody /></main>
        <footer><Footer /></footer>
      </div>

    
    </div>
  )
}