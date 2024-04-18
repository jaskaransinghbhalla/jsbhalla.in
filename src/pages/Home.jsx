import NavBar from '../components/NavBar'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'

export default function Home() {
  return (<div>
    <div className="h-32 max-h-full md:max-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <NavBar />
        <MainBody />
        <Footer />
      </div>
    </div>
  </div>);
}