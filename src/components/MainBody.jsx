import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import RecentProjects from "./RecentProjects";

export default function MainBody() {
    return <div className="mx-44">
        <About />
        {/* <RecentProjects /> */}
        {/* <Skills /> */}
        <Contact />
    </div>
}