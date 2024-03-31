import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import RecentProjects from "./RecentProjects";

export default function MainBody() {
    return <div className="mx-48 my-8">
        <About />
        {/* <Experiences /> */}
        {/* <RecentProjects /> */}
        <Skills />
        <Contact />
    </div>
}