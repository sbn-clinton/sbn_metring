"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Bot, Brain, Zap, Cpu } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "AI-Powered Engineering Assessment Platform",
      description:
        "Developed an intelligent platform that evaluates engineering projects using advanced machine learning algorithms and neural networks, improving assessment accuracy by 40% with real-time feedback systems.",
      technologies: ["Python", "TensorFlow", "React", "Node.js", "OpenAI"],
      status: "Completed",
      impact: "Used by 500+ engineering students",
      icon: Brain,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Smart Robotics Infrastructure Monitoring",
      description:
        "Created an advanced IoT-based robotic system for monitoring infrastructure health in Enugu metropolis, providing real-time data analysis and predictive maintenance through autonomous robots.",
      technologies: ["IoT", "Arduino", "Python", "MongoDB", "Robotics"],
      status: "In Progress",
      impact: "Monitoring 15+ infrastructure points",
      icon: Bot,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "AI-Enhanced Engineering Education App",
      description:
        "Built a comprehensive mobile application providing engineering resources, interactive robotics simulations, and AI-powered learning assistance with virtual reality integration for Nigerian students.",
      technologies: ["React Native", "Firebase", "AI/ML", "VR", "3D Graphics"],
      status: "Planning",
      impact: "Target: 10,000+ students",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Autonomous Engineering Optimization System",
      description:
        "Implemented advanced machine learning models with robotic process automation to optimize engineering workflows, reducing project completion time by 25% through intelligent resource allocation.",
      technologies: ["Python", "Scikit-learn", "PostgreSQL", "RPA", "Computer Vision"],
      status: "Completed",
      impact: "Optimized 50+ engineering processes",
      icon: Cpu,
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "Planning":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Projects & Case Studies
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our innovative projects that demonstrate the power of combining traditional engineering with modern
            AI, robotics, and intelligent automation solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <Card className="h-full border-border hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden relative">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center flex-1">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                      >
                        <project.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)} shadow-sm`}
                    >
                      {project.status}
                    </motion.span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-muted text-foreground rounded-full text-sm font-medium border border-border hover:border-primary transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center text-primary font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.impact}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border text-foreground hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                >
                  <project.icon className="w-8 h-8 text-primary" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
