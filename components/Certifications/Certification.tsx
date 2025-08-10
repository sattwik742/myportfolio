// components/Certification.tsx
import React from "react";
import { Award } from "lucide-react";

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const certifications: CertificationItem[] = [
  {
    title: "Crash Course on Python",
    issuer: "Google",
    date: "April 23, 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/CTHXMTAKAFKT"
  }
];

const Certification: React.FC = () => {
  return (
    <section id="Certifications" className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 text-black">
          <Award className="w-7 h-7 text-black" />
          Certifications
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-black  shadow hover:shadow-lg transition-shadow p-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-white">
                  {cert.issuer}
                </p>
                <p className="text-xs text-white mt-1">
                  {cert.date}
                </p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-white hover:underline"
                >
                  View Credential →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
