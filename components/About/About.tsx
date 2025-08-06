export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Hey, I'm <span className="text-black">Sattwik</span>
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          A passionate <strong>Fullstack Developer</strong> building fast, scalable, and elegant web applications using
          <span className="text-black"> Next.js</span>, <span className="text-black">Node.js</span>, and modern web tech.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="border border-black text-black px-6 py-2 hover:bg-gray-800 hover:text-white transition"
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
}
