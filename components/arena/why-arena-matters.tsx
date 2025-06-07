"use client";

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Lightbulb } from 'lucide-react';

const WhyArenaMatters = () => {
  const principles = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Learning turns into experimentation',
      description: 'Transform theoretical knowledge into practical testing',
      color: 'blue'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Experimentation becomes intuition',
      description: 'Develop market sense through repeated testing',
      color: 'purple'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'And intuition gets backed by real numbers',
      description: 'Validate your instincts with hard data',
      color: 'green'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              🌟 Why the <span className="text-gradient">Backtest Arena</span> Matters
            </h2>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            The Arena isn't just about performance—it's about insight, growth, and community-powered evolution.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            It's where learning turns into experimentation, experimentation becomes intuition, 
            and intuition gets backed by real numbers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {principles.map((principle, index) => (
              <PrincipleCard key={index} principle={principle} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glassmorphism rounded-2xl p-8 max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Users className="h-12 w-12 text-primary" />
              <Target className="h-12 w-12 text-primary animate-pulse" />
            </div>
            
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold">
                This is trading reimagined.
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold text-gradient">
                This is strategy as a story.
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold">
                This is the core loop of every power user in the EtherEdge ecosystem.
              </h3>
            </div>
            
            <div className="text-center">
              <motion.button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enter the Arena
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface PrincipleCardProps {
  principle: any;
  index: number;
}

const PrincipleCard = ({ principle, index }: PrincipleCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    className="feature-card text-center group"
    whileHover={{ y: -5 }}
  >
    <div className={`p-4 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform bg-${principle.color}-500/20 text-${principle.color}-400`}>
      {principle.icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
      {principle.title}
    </h3>
    <p className="text-muted-foreground">{principle.description}</p>
  </motion.div>
);


export default WhyArenaMatters;