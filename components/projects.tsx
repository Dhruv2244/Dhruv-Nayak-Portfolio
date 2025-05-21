import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Face Attendance System",
      description:
        "AI-based attendance system built with Python and OpenCV that uses facial recognition to automate attendance tracking for educational institutions.",
      tags: ["Python", "OpenCV", "AI", "Facial Recognition"],
    },
    {
      title: "Smart India Hackathon 2024",
      description:
        "AI web solution designed to reduce student dropout rates by identifying at-risk students and providing targeted interventions.",
      tags: ["AI", "Web Development", "Data Analysis", "Education"],
    },
    {
      title: "Smart Journey Planner",
      description:
        "Travel planning application that provides real-time route information and attraction data to help users create optimized travel itineraries.",
      tags: ["React", "Node.js", "Maps API", "Real-time Data"],
    },
    {
      title: "Personal AI Chatbot",
      description:
        "Custom AI chatbot built to provide personalized responses and assistance based on user preferences and history.",
      tags: ["AI", "Natural Language Processing", "JavaScript", "API Integration"],
    },
    {
      title: "Code Circuit Hackathon 2025",
      description:
        "Comprehensive health monitoring dashboard created during the CodeCircuit Hackathon to track and visualize health metrics.",
      tags: ["React", "Data Visualization", "Health Tech", "Hackathon"],
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my technical projects and hackathon submissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
