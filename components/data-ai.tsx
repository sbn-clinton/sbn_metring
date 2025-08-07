"use client"

import { motion } from "framer-motion"
import { Database, Brain, BarChart3, Zap, Shield, Cpu, Bot, CircuitBoardIcon as Circuit, Sparkles } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export function DataAI() {
  const features = [
    {
      icon: Database,
      title: "Advanced Data Collection",
      description:
        "Systematic acquisition of engineering datasets from multiple sources using robotic sensors and IoT devices to build comprehensive knowledge bases.",
      stats: "10,000+ data points collected",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Machine learning algorithms and neural networks analyze patterns in engineering data to provide actionable insights and predictive intelligence.",
      stats: "95% accuracy in predictions",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Bot,
      title: "Robotic Process Automation",
      description:
        "Intelligent robots automate data collection and analysis processes, reducing human error and increasing efficiency in engineering workflows.",
      stats: "80% process automation",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description:
        "Lightning-fast data processing capabilities with edge computing enabling real-time decision making and instant feedback loops through smart systems.",
      stats: "< 100ms response time",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Reliability Enhancement",
      description:
        "AI models predict potential failures and recommend preventive measures using predictive analytics and autonomous monitoring systems.",
      stats: "85% reduction in failures",
      gradient: "from-red-500 to-rose-600",
    },
    {
      icon: Cpu,
      title: "Smart Integration",
      description:
        "Seamless integration of AI capabilities into existing engineering workflows with robotic assistance and intelligent automation systems.",
      stats: "100+ integrations completed",
      gradient: "from-indigo-500 to-purple-600",
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
    <section id="data-ai" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Data Acquisition & AI Integration
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leveraging cutting-edge artificial intelligence, robotics, and comprehensive data acquisition strategies to
            revolutionize engineering practices and enhance technological reliability across Nigeria.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <Card className="h-full bg-card/80 backdrop-blur-md border-border hover:bg-card/90 transition-all duration-500 overflow-hidden relative">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                    
                    {/* Floating particles */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute -top-1 -right-1"
                    >
                      <Sparkles className="w-4 h-4 text-white/60" />
                    </motion.div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>

                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-muted/50 rounded-xl p-4 border border-border group-hover:border-primary/30 transition-colors"
                  >
                    <span className="text-sm font-semibold text-primary">{feature.stats}</span>
                  </motion.div>
                </CardContent>

                {/* Floating decorative circuit */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity"
                >
                  <Circuit className="w-6 h-6 text-primary" />
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-card/80 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto border border-border relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-0 right-0 w-32 h-32 border border-primary/10 rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full blur-xl"
            />

            <h3 className="text-3xl font-bold text-foreground mb-8 relative z-10">Our AI-Driven Robotics Approach</h3>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <span className="text-white font-bold text-xl">1</span>
                </motion.div>
                <h4 className="font-semibold text-foreground mb-2">Data Collection</h4>
                <p className="text-muted-foreground text-sm">
                  Gather comprehensive engineering datasets using robotic sensors and IoT devices
                </p>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <span className="text-white font-bold text-xl">2</span>
                </motion.div>
                <h4 className="font-semibold text-foreground mb-2">AI Analysis</h4>
                <p className="text-muted-foreground text-sm">
                  Apply machine learning algorithms and neural networks to extract meaningful insights
                </p>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <span className="text-white font-bold text-xl">3</span>
                </motion.div>
                <h4 className="font-semibold text-foreground mb-2">Robotic Implementation</h4>
                <p className="text-muted-foreground text-sm">
                  Deploy intelligent robotic solutions that enhance engineering reliability and efficiency
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
