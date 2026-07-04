import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold">
                        Software Engineer | Backend & Distributed Systems
                    </h3>
                    <p className="text-muted-foreground">
                        I’m a Software Engineer focused on designing and building scalable software systems, from distributed backend services to cloud-native applications and intelligent data-driven features. I care about system design, reliability, performance, and building products that work in real-world environments.
                    </p>

                    <p className="text-muted-foreground">
                        I enjoy working across the full software stack - from designing APIs and backend architectures to deploying cloud systems and integrating data/AI pipelines. My focus is on building clean, scalable, and production-ready systems with strong engineering fundamentals.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get in touch
                        </a>

                        <a 
                            href="resume/Shubham_Patel_Resume.pdf" 
                            target="_blank"rel="noopener noreferrer"
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200">
                            {" "}
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Software Systems Engineering</h4>
                                <p className="text-muted-foreground">
                                    Designing scalable, production-grade software systems including APIs, services, and modular backend architectures. Focused on reliability, performance, and clean system design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Distributed & Cloud Systems</h4>
                                <p className="text-muted-foreground">
                                    Building cloud-native and distributed applications using containerized services, event-driven workflows, and scalable data processing systems.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Intelligent Software Systems</h4>
                                <p className="text-muted-foreground">
                                    Integrating ML models, LLMs, and retrieval systems into production software to build intelligent features within real-world applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}