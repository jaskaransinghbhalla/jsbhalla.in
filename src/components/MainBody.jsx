import Contact from "./Contact";
import Skills from "./Skills";
import Introduction from "./Introduction";

export default function MainBody() {
    return <div className="mx-8 mb-8 lg:mx-48 lg:mb-1">
        <Introduction />
        <Skills />
        <Contact />
    </div>
}