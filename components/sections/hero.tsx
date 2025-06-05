"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import ParticleBackground from '@/components/particle-background';

const HeroSection = () => {
  const [ethPrice, setEthPrice] = useState("2,845.32");
  const [marketMood, setMarketMood] = useState<'bullish' | 'bearish' | 'volatile'>('bullish');

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 10;
      const newPrice = (parseFloat(ethPrice.replace(',', '')) + change).toFixed(2);
      setEthPrice(newPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      
      // Randomly change market mood
      if (Math.random() < 0.1) {
        const moods: ('bullish' | 'bearish' | 'volatile')[] = ['bullish', 'bearish', 'volatile'];
        setMarketMood(moods[Math.floor(Math.random() * moods.length)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [ethPrice]);

  const moodColors = {
    bullish: 'bg-green-500/20 text-green-400',
    bearish: 'bg-red-500/20 text-red-400',
    volatile: 'bg-purple-500/20 text-purple-400'
  };

  const moodText = {
    bullish: 'Bullish',
    bearish: 'Bearish',
    volatile: 'Highly Volatile'
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20">
      <ParticleBackground />
      
      {/* Market Stats Bar */}
      <div className="fixed top-20 left-0 right-0 bg-black/40 backdrop-blur-sm border-b border-white/10 z-30">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center transition-all duration-300">
              <span className="text-muted-foreground mr-2">ETH:</span>
              <span className="font-medium">${ethPrice}</span>
            </div>
            <div className="flex items-center">
              <span className="text-muted-foreground mr-2">Mood:</span>
              <span className={cn(
                "px-2 py-0.5 rounded-full font-medium",
                moodColors[marketMood], "transition-all duration-300"
              )}>
                {moodText[marketMood]}
              </span>
            </div>
          </div>
          <button className="text-primary hover:text-primary/90 transition-colors">
            View Full Analysis
            <ArrowRight className="inline-block ml-1 h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Tagline */}
        <motion.div 
          className="inline-flex items-center py-2 px-4 rounded-full bg-primary/10 border border-primary/20 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Zap className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm font-medium">
            Data-driven. Battle-tested. Built to sharpen your crypto edge.
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Sharpen Your{' '}
          <span className="text-gradient glow">
            Crypto Edge
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Ride the signal. Ignore the noise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all flex items-center justify-center group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all border border-white/10">
            View Live Demo
          </button>
          <button className="bg-secondary/50 hover:bg-secondary/70 text-foreground px-8 py-4 rounded-lg font-medium text-lg transition-all border border-white/10">
            Join the Edge Community
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;