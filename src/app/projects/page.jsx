import { getProjects } from "./actions";
import Card from "../../components/timeline/card";

export const revalidate = 7200; // Revalidate every 2 hours

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="w-full flex justify-center mb-16 min-h-screen">
      <div className="w-full max-w-7xl px-6 lg:px-12">
        <div className="mt-8 mb-12">
          <div className="mb-2">
            <h2 className="text-5xl font-bold text-gray-800 mb-3">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-4">
            A showcase of my work and personal projects
          </p>
        </div>

        <div>
          {projects.length > 0 ? (
            <div className="space-y-6">
              {projects.map((item) => (
                <Card key={item.title} data={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
