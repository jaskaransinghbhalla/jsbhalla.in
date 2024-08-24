import Card from "@/components/project/card";
import { getProjects } from "./actions";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="h-32 max-h-full md:max-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold my-4">Projects</h1>
          <div className="flex-wrap my-6 items-center">
            {projects.map((item) => {
              return (
                <div className="py-4" key={item.title}>
                  <Card data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
