import Card from "../../components/experience/card";
import { getExperience } from "./actions";

export default async function Experience() {
  const projects = await getExperience();
  return (
    <div className="flex flex-col items-center mb-8">
      <div className=" w-full px-4 mt-5 flex">
        <h2 className="text-4xl font-bold text-gray-800 border-b-2 border-gray-900 pb-2 m-4">
          Experience
        </h2>
      </div>
      <div className="flex-wrap my-3 items-center">
        {projects.map((item) => {
          return (
            <div className="py-4 mx-3" key={item.title}>
              <Card data={item} key={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
