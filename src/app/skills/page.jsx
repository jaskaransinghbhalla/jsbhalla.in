import { getSkillsData } from "../actions";

export const revalidate = 7200; // Revalidate every 2 hours

const SkillsCategory = ({ category, skills }) => (
  <div className="mb-12">
    <div className="mb-6">
      <h3 className="text-3xl font-bold text-gray-800 pb-3 border-b-2 border-gray-300 relative">
        <span className="relative z-10 bg-white pr-4">{category}</span>
        <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
      </h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="px-4 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 text-center"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default async function Skills() {
  const skillsData = await getSkillsData();
  return (
    <div className="flex flex-col items-center mb-16 min-h-screen">
      <div className="w-full max-w-7xl px-4 lg:px-8 mt-8 mb-12">
        <div className="mb-2">
          <h2 className="text-5xl font-bold text-gray-800 mb-3">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-lg mt-4">
          Technologies and tools I work with across different domains
        </p>
      </div>

      <div className="w-full max-w-7xl px-4 lg:px-8">
        {Object.keys(skillsData).length > 0 ? (
          Object.entries(skillsData).map(([category, skills]) => (
            <SkillsCategory key={category} category={category} skills={skills} />
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No skills available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
