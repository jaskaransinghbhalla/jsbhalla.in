import React from "react";
import { getSkillsData } from "../../app/actions";

const SkillCategory = ({ title, skills }) => (
  <div className="bg-stone-300 text-stone-700 rounded-lg shadow-mdhover:shadow-lg transition-shadow border p-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="m-1 px-3 py-2 text-xs font-semibold text-gray-700 bg-white -200 rounded-full"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

const SkillsShowcase = async () => {
  const skillsData = await getSkillsData();
  return (
    <div className="md:mt-6 md:mb-16 w-screen h-screen">
      <div className="text-xl md:text-2xl font-bold">My Skills</div>
      <p className="mb-6 text-gray-700 my-4">
        Through college courses and self-learning, I&apos;ve built a solid foundation
        in computer science and web development. Here are some technologies I&apos;m
        familiar with:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-2">
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category} title={category} skills={skills} />
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;
