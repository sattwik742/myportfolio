import education from "../data/education";

export default function Education() {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="timeline">
        {education.map((edu) => (
          <div key={edu.id} className="edu-card">
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <span>{edu.period}</span>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}