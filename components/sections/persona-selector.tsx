"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { User, Code, LineChart, GraduationCap } from 'lucide-react';

const personas = [
  {
    icon: <User className="h-6 w-6" />,
    title: "I'm a Trader",
    description: "Seeking daily edge",
    color: "blue"
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "I'm a Builder",
    description: "Building crypto products, needs data",
    color: "pink"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "I'm a Quant",
    description: "Focused on modeling & metrics",
    color: "green"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "I'm Here to Learn",
    description: "Just starting out",
    color: "purple"
  }
];

const PersonaSelector = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 noise-bg z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Is EtherEdge <span className="text-gradient">For You?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select your path and discover how EtherEdge can sharpen your crypto edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button className="w-full feature-card text-left">
                <div className={cn(
                  "p-3 rounded-lg inline-flex mb-4",
                  persona.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                  persona.color === "pink" ? "bg-pink-500/20 text-pink-400" :
                  persona.color === "green" ? "bg-green-500/20 text-green-400" :
                  "bg-purple-500/20 text-purple-400"
                )}>
                  {persona.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
                <p className="text-muted-foreground">{persona.description}</p>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaSelector;