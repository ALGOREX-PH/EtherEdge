"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Zap, LineChart, Brain } from 'lucide-react';
import ParticleBackground from '@/components/particle-background';

const ProductHero = () => {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient glow">Product Tour</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
            From Raw Data to Razor-Sharp Crypto Forecasts
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Dive into the inner workings of EtherEdge. See how we transform market data 
            into actionable insights through a combination of statistical rigor and 
            cutting-edge technology.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center group">
              Launch Interactive Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all border border-white/10">
              View Documentation
            </button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-primary" />}
              title="Real-time Processing"
              description="Process market data as it happens"
            />
            <FeatureCard
              icon={<LineChart className="h-6 w-6 text-pink-500" />}
              title="Advanced Analytics"
              description="Sophisticated statistical analysis"
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6 text-cyan-500" />}
              title="Smart Predictions"
              description="AI-powered market forecasting"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="feature-card flex flex-col items-center text-center p-6"
  >
    <div className="p-3 rounded-lg bg-secondary/50 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export default ProductHero;