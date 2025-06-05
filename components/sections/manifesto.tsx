"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const manifestoLines = [
    'Simplicity over noise.',
    'Transparency over hype.',
    'Consistency over luck.',
    'Community over ego.'
  ];

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The <span className="text-gradient">Edge</span> Manifesto
          </h2>

          <div className="space-y-6">
            {manifestoLines.map((line, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-4" />
                  <p className="text-xl font-medium font-mono">{line}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-lg text-muted-foreground text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Feel the edge, don't just read it.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;