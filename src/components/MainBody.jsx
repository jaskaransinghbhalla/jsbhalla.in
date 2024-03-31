import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import RecentProjects from "./RecentProjects";

export default function MainBody() {
    return <div className="mx-8 mb-8 lg:mx-48 lg:mb-1">
        <About />
        {/* <Experiences /> */}
        {/* <RecentProjects /> */}
        <Skills />
        <Contact />
    </div>
}