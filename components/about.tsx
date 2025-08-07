"use client";

import { motion } from "framer-motion";
import { Target, Eye, User, Award, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            About METRING
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            We focus on policing and installing the idea of engineering and
            technology by sensitization using AI, acquiring various datasets and
            tech resources to improve the reliability and usefulness of
            engineering through robotics and intelligent systems.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-border hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm group">
              <CardContent className="p-8 relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-50"
                />

                <div className="flex items-center mb-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                  Digital modification and advancement of the Nigerian system,
                  starting with Enugu metropolis and focusing on students. We
                  aim to bridge the gap between traditional engineering
                  practices and modern technological solutions through
                  AI-powered robotics and intelligent automation systems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-border hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm group">
              <CardContent className="p-8 relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full opacity-50"
                />

                <div className="flex items-center mb-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                  >
                    <Eye className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                  Settling and mastering basic knowledge of engineering and
                  technology in Nigeria. We envision a future where every
                  Nigerian has access to cutting-edge engineering education,
                  robotics training, and technological resources powered by
                  artificial intelligence.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 text-white relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-0 right-0 w-32 h-32 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"
          />

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mr-6 backdrop-blur-sm overflow-hidden"
                >
                  <Image
                    src="/images/founder.jpg" // ✅ replace with your actual image path
                    alt="Founder"
                    width={100}
                    height={100}
                    className="rounded-full object-cover "
                  />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">Meet Our Founder</h3>
                  <h4 className="text-xl text-white/80">
                    Asadu Godswill Chijioke
                  </h4>
                </div>
              </div>

              <p className="text-white/90 mb-6 leading-relaxed">
                With 5 years of experience in Electronic and Computer
                Engineering, Godswill brings a wealth of knowledge and passion
                for technological advancement, AI integration, and robotics
                innovation to METRING.
              </p>
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-white/80 mr-3" />
                <span className="text-white/80">
                  Former IT Student at Desicon Engineering Limited
                </span>
              </div>
              <div className="flex items-center">
                <Brain className="w-5 h-5 text-white/80 mr-3" />
                <span className="text-white/80">AI & Robotics Specialist</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="inline-block p-8 bg-white/10 rounded-full mb-6 backdrop-blur-sm"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-white/20 to-white/40 rounded-full flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/globe.png" // ✅ change to your image path or URL
                    alt="Founder"
                    fill
                    className="object-cover rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                  />
                </div>
              </motion.div>

              <div className="space-y-2 text-white/80">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  metringceo22@gmail.com
                </p>
                <p>
                  <strong className="text-white">Phone:</strong> 07066624089
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
