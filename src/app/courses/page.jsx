import Card from "../../components/courses/card";
import { getCourses } from "./actions";

export const revalidate = 7200; // Revalidate every 2 hours

const CoursesCategory = ({ courses }) => (
  <div className="mb-12">
    <div className="mb-6">
      <h3 className="text-3xl font-bold text-gray-800 pb-3 border-b-2 border-gray-300 relative">
        <span className="relative z-10 bg-white pr-4">{courses[0].category}</span>
        <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
      </h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {courses.map((item) => {
        return (
          <Card key={item.code} data={item} />
        );
      })}
    </div>
  </div>
);

export default async function Courses() {
  const courses = await getCourses();
    return (
      <div className="flex flex-col items-center mb-16 min-h-screen">
        <div className="w-full max-w-7xl px-4 lg:px-8 mt-8 mb-12">
          <div className="mb-2">
            <h2 className="text-5xl font-bold text-gray-800 mb-3">
              Courses
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-4">
            A collection of courses I&apos;ve completed and am currently pursuing
          </p>
        </div>

        <div className="w-full max-w-7xl px-4 lg:px-8">
          {Object.keys(courses).length > 0 ? (
            Object.entries(courses).map(([category, item]) => (
              <CoursesCategory key={category} courses={item} />
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No courses available.</p>
            </div>
          )}
        </div>
      </div>
    );
}
