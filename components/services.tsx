"use client"

import { motion } from "framer-motion"
import { Brain, Database, Cog, Users, Lightbulb, Shield, Bot, Cpu, Zap, CircuitBoardIcon as Circuit, Sparkles, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Integration & Sensitization",
      description:
        "Implementing cutting-edge AI solutions to enhance engineering processes and educate communities about technological advancement through machine learning.",
      features: ["Machine Learning Models", "Neural Networks", "Predictive Analytics"],
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Bot,
      title: "Robotics & Automation",
      description:
        "Developing intelligent robotic systems and automation solutions that revolutionize traditional engineering practices and industrial processes.",
      features: ["Industrial Robots", "Process Automation", "Smart Systems"],
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Database,
      title: "Data Acquisition & Analysis",
      description:
        "Collecting and analyzing comprehensive engineering datasets to improve reliability and usefulness of technological solutions using advanced algorithms.",
      features: ["Big Data Processing", "Real-time Analytics", "Data Visualization"],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Cpu,
      title: "Smart Engineering Solutions",
      description:
        "Providing expert consultation on electronic and computer engineering projects with modern technological approaches and IoT integration.",
      features: ["IoT Systems", "Embedded Solutions", "Smart Sensors"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Users,
      title: "Student Mentorship & Training",
      description:
        "Focusing on students in Enugu metropolis to build the next generation of engineering and technology leaders through hands-on robotics training.",
      features: ["Robotics Workshops", "AI Training", "Tech Bootcamps"],
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: Rocket,
      title: "Innovation Development",
      description: "Developing innovative solutions that bridge traditional engineering with cutting-edge technology, including autonomous systems and smart infrastructure.",
      features: ["Autonomous Systems", "Smart Infrastructure", "Innovation Labs"],
      color: "from-yellow-500 to-orange-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive services combine traditional engineering expertise with cutting-edge AI, robotics, and 
            technology solutions to drive innovation and advancement across Nigeria.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <Card className="h-full border-border hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden relative">
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center justify-center"
                      >
                        <Sparkles className="w-3 h-3 text-primary mr-2" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-4 right-4 opacity-10"
                >
                  <Circuit className="w-6 h-6 text-primary" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
