import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dhruv Nayak | Full-Stack Developer",
  description:
    "Portfolio of Dhruv Nayak, a Full-Stack Developer specializing in HTML, CSS, JavaScript, React, Next.js, Node.js, PHP, and .NET.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </div>
  )
}
