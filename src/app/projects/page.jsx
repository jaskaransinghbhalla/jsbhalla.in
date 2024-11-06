import { getProjects } from "./actions";
import Timeline from "@/components/project/timeline";
import Card from "@/components/project/card";
export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="flex flex-col items-center mb-8">
      <div className=" w-full lg:w-[60rem] px-4 mt-5 flex">
        <h2 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-900 pb-2 m-4">
          Projects
        </h2>
      </div>
      <div className="flex-wrap my-6 items-center hidden md:inline">
        {<Timeline projects={projects} />}
      </div>
      <div className="flex-wrap my-6 mx-4 items-center md:hidden">
        {projects.map((item) => {
          return (
            <div className="py-4" key={item.title}>
              <Card data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
