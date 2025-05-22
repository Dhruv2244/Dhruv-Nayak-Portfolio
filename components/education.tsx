import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">I am currently studying Diploma in Computer Engineering</h3>
                    <p className="text-muted-foreground">LJ Polytechnic (07/2023 - Present)</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" /> Relevant Coursework
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Web Development</li>
                    <li>Python Programming</li>
                    <li>Java Programming</li>
                    <li>Database Management Systems (DBMS)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
