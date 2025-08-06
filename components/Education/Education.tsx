export default function Education() {
  const educationData = [
    {
      year: "2025",
      title: "Bachelor of Computer Application",
      institution: "RCC Institute of Information Technology",
      location: "Canal S Rd, Beleghata, Kolkata, West Bengal 700015",
      session: "2022–2025",
      cgpa: "8.07",
    },
    {
      year: "2021",
      title: "Higher Secondary (XII), Science Stream",
      institution: "Baranagar Narendranath Vidyamandir",
      location: "61, Kashi Nath Dutta Rd, Baranagar, West Bengal 700036",
      session: "2019–2021",
      percentage: "87.4%",
    },
    {
      year: "2019",
      title: "Secondary School (X)",
      institution: "Baranagar Ramakrishna Mission Ashrama High School",
      location: "37, Gopal Lal Tagore Rd, Baranagar, West Bengal 700036",
      session: "2013–2019",
      percentage: "88.6%",
    },
  ];

  return (
    <section id="education" className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

        <div className="relative border-l-2 border-white pl-6">
          {educationData.map((edu, idx) => (
            <div key={idx} className="mb-10 relative">

              {/* Timeline Dot */}
              <div className="absolute -left-[14px] top-1 w-4 h-4 bg-white rounded-full border-2 border-black"></div>
              <span className="text-sm text-gray-400">{edu.year}</span>
              <h3 className="text-xl font-semibold mt-1">{edu.title}</h3>
              <p className="text-sm font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.location}</p>
              <p className="text-sm">Session: {edu.session}</p>
              {edu.cgpa && <p className="text-sm">CGPA: {edu.cgpa}</p>}
              {edu.percentage && <p className="text-sm">Percentage: {edu.percentage}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
