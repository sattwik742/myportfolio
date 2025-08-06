// Importing Navbar Component
import Navbar from "@/components/Navbar/Navbar";
// Importing Hero Section
import About from "@/components/About/About";
// Importing Education Section
import Education from "@/components/Education/Education";
// Importing Skills Section
import Skills from "@/components/Skills/Skills";


export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Education />
      <Skills />
    </main>
  );
}
