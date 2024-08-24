import Card from "@/components/project/card";
import { projectsData } from "../../../data/data";

export default function Projects() {
  return (
    <div className="h-32 max-h-full md:max-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold my-4">Projects</h1>
          <div className="flex-wrap my-6 mx-3 items-center">
            {projectsData.map((item) => {
              return <Card key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
