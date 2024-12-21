import Card from "../../components/courses/card";
import { getCourses } from "./actions";

const CoursesCategory = ({ courses }) => (
  <div className="">
    <div>
      <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-900 pb-2">
        {courses[0].category}
      </h3>
    </div>
    <div className="grid grid-cols-2 my-3 items-center">
      {courses.map((item) => {
        return (
          <div className="py-4 mx-3" key={item.code}>
            <Card key={item.code} data={item} />
          </div>
        );
      })}
    </div>
  </div>
);

export default async function Courses() {
  const courses = await getCourses();
  return (
    <div className="flex flex-col items-center mb-8">
      <div className=" w-full px-4 mt-5 flex">
        <h2 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-900 pb-2 m-4">
          Courses
        </h2>
      </div>

      <div className="my-3 items-center">
        {Object.entries(courses).map(([category, item]) => (
          <CoursesCategory key={category} courses={item} />
        ))}
      </div>
    </div>
  );
}
