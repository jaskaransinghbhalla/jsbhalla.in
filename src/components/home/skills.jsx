import { skillsData } from "../../../data/data";
export default function Skills() {
  return (
    <div className="my-6 text-justify">
      <div className="text-2xl font-bold">My Skills</div>
      <div className="my-6">
        Through college courses and self-learning, I&apos;ve built a solid
        foundation in computer science and web development. Here are some
        technologies I&apos;m familiar with:
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-4 my-3 font-medium ">
        {skillsData.map((item) => {
          return (
            <div key={item.title}>
              <h2>{item.title}</h2>
              <ul className="list-disc my-2">
                {item.skills.map((skill) => {
                  return (
                    <li key={item.skill} className="my-1">
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
