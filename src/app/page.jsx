import Introduction from "@/components/home/Introduction";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="h-32 max-h-full md:max-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <div className="mx-8 mb-8 lg:mx-48 lg:mb-1">
          <Introduction />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}
