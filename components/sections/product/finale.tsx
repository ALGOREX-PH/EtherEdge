"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Github, MessageSquare, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Finale = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Edge Isn't Magic.{' '}
            <span className="text-gradient">
              It's Mastery.
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            You've seen every step, every signal, every test. You've built signals. 
            Toggled moods. Interacted with the core. Now, you're not just a user. 
            You're an Edge-seeker—a strategist in the age of intelligent markets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="feature-card flex flex-col items-center text-center p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Try Edge Demo</h3>
              <p className="text-muted-foreground mb-6">
                Experience the power of EtherEdge firsthand with our interactive demo.
              </p>
              <button className="bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                Launch Demo
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="feature-card flex flex-col items-center text-center p-8"
            >
              <h3 className="text-2xl font-bold mb-4">See Live Predictions</h3>
              <p className="text-muted-foreground mb-6">
                View current ETH forecasts and track our real-time performance.
              </p>
              <button className="bg-secondary hover:bg-secondary/70 text-foreground px-6 py-3 rounded-lg transition-colors flex items-center gap-2 border border-white/10">
                View Predictions
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <SocialButton
              icon={<Github className="h-5 w-5" />}
              label="Fork on GitHub"
            />
            <SocialButton
              icon={<MessageSquare className="h-5 w-5" />}
              label="Join Discord"
            />
            <SocialButton
              icon={<Twitter className="h-5 w-5" />}
              label="Follow Updates"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
}

const SocialButton = ({ icon, label }: SocialButtonProps) => (
  <a
    href="#"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors border border-white/10"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Finale;