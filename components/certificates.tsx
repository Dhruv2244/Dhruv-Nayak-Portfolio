import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function Certificates() {
  const certificates = [
    {
      title: "Getting Started with Git and GitHub",
      issuer: "Coursera",
      date: "2023",
      description:
        "Learned version control fundamentals, repository management, and collaborative workflows using Git and GitHub.",
    },
    {
      title: "Agile Project Management",
      issuer: "Udemy",
      date: "2023",
      description: "Mastered Agile methodologies, Scrum framework, sprint planning, and team collaboration techniques.",
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certificates</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professional certifications and courses I've completed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {certificates.map((certificate, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{certificate.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                        <span>{certificate.issuer}</span>
                        <span>•</span>
                        <span>{certificate.date}</span>
                      </div>
                      <p className="text-muted-foreground">{certificate.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
