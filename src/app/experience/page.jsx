import Card from "../../components/experience/card";
import { getExperience } from "./actions";
import calculateTotalExperience from "../../utils/calculate-total-experience";
import { Briefcase } from "lucide-react";

export const revalidate = 7200; // Revalidate every 2 hours

export default async function Experience() {
  const experience = await getExperience();
  const totalExp = calculateTotalExperience(experience);
  
  return (
    <div className="flex flex-col items-center mb-16 min-h-screen">
      <div className="w-full max-w-7xl px-4 lg:px-8 mt-8 mb-12">
        <div className="mb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
            <div>
              <h2 className="text-5xl font-bold text-gray-800">
                Experience
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
            </div>
            {experience.length > 0 && (
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl shadow-sm">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Experience</p>
                  <p className="text-2xl font-bold text-gray-800">{totalExp.display}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 text-lg mt-4">
          My professional journey and work experience
        </p>
      </div>

      <div className="w-full max-w-7xl px-4 lg:px-8">
        {experience.length > 0 ? (
          <div className="space-y-6">
            {experience.map((item) => (
              <Card key={item.organization || item.role} data={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No experience available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
