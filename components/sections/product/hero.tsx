"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
            Product Tour / How It Works{' '}
            <span className="text-gradient">🚀🔬</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient">
            "Demystify the Magic" — From Raw Inputs to Razor-Sharp Crypto Forecasts
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Welcome to the EtherEdge walkthrough—where intelligence meets interaction. 
            This isn't your typical feature dump. It's a narrative. A visceral, 
            scroll-to-reveal journey through how EtherEdge works, from the moment a 
            price tick hits the feed to the instant you receive a market-shaping forecast.
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center group">
              Try Edge Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all border border-white/10">
              View Documentation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHero;