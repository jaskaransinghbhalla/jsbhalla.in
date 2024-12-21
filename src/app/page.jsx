import Contact from "@/components/home/contact";
import FeaturedProjects from "@/components/projects/feature-projects";
import Introduction from "@/components/home/Introduction";
import Skills from "@/components/home/skills";

export default function Home() {
  return (
    <div>
      <Introduction />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}
