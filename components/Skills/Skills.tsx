import React from 'react';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Javascript', 'Java', 'Python', 'C', 'Bash'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Linux', 'Docker', 'VS Code', 'Notion', 'Obsidian'],
  },
  {
    title: 'Other',
    skills: ['REST APIs', 'CI/CD', 'Responsive Design', 'System Design'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="Skills" className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 border shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <ul className="list-disc list-inside space-y-1 text-black">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
