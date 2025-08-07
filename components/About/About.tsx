import Image from "next/image";

export default function About() {
  return (
    <section id="About" className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-60 h-60 relative mb-6">
          <Image
            src="/images/profile.jpeg" 
            alt="Profile Image"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-bounce">
          Hi, I'm <span className="text-black">Sattwik</span>
        </h1>
        {/* Description */}
        <p className="text-xl text-black mb-6 max-w-2xl">
          A passionate Fullstack Developer building fast, scalable, and elegant web applications using
          Next.js, Node.js and modern web tech.
        </p>


        <div className="flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
