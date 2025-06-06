"use client";

import { motion } from 'framer-motion';
import { Users, Brain, Code, Target, Lightbulb, Zap } from 'lucide-react';

const PhilosophySection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 noise-bg z-0" />
      
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
              🎯 The Philosophy Behind the <span className="text-gradient">Features Hub</span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-4">
            Not a List. Not a Menu. A Launchpad.
          </p>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
            The Features Hub isn't here to catalog—it's here to spark exploration. 
            Every pixel is designed with a mission: to turn features into learning loops, 
            trading tools, and collaborative experiments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <PhilosophyCard
              icon={<Users className="h-8 w-8" />}
              title="For Beginners"
              description="Feel invited to poke around and try something new. Every feature has guided tutorials and safe sandbox environments."
              color="blue"
              features={[
                "Guided tutorials",
                "Safe sandbox environments", 
                "Step-by-step walkthroughs",
                "No-risk experimentation"
              ]}
            />
            <PhilosophyCard
              icon={<Brain className="h-8 w-8" />}
              title="For Analysts"
              description="Feel empowered to dig into the mechanics. Access raw data, model parameters, and detailed documentation."
              color="purple"
              features={[
                "Raw data access",
                "Model parameter controls",
                "Detailed documentation",
                "Advanced analytics tools"
              ]}
            />
            <PhilosophyCard
              icon={<Code className="h-8 w-8" />}
              title="For Pros"
              description="Feel respected—given tools sharp enough to win, fast enough to adapt, and open enough to customize."
              color="green"
              features={[
                "Full API access",
                "Custom integrations",
                "Advanced configurations",
                "Open-source components"
              ]}
            />
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glassmorphism rounded-2xl p-8 max-w-5xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Lightbulb className="h-12 w-12 text-primary" />
              <Zap className="h-12 w-12 text-primary animate-pulse" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "We built this not just to showcase what EtherEdge can do, 
              but to inspire what <span className="text-gradient">you can do with it</span>."
            </blockquote>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <MissionPoint
                title="You're not here to consume"
                description="You're here to co-create"
              />
              <MissionPoint
                title="The future is agentic"
                description="Interpretable and community-built"
              />
              <MissionPoint
                title="Your edge awaits"
                description="Manifest it with EtherEdge"
              />
            </div>
            
            <div className="text-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
                Start Building Your Edge
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
}

const PhilosophyCard = ({ icon, title, description, color, features }: PhilosophyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="feature-card text-center group"
    whileHover={{ y: -5 }}
  >
    <div className={`p-4 rounded-xl bg-${color}-500/20 text-${color}-400 inline-flex mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground mb-6">{description}</p>
    
    <div className="space-y-2">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          className="flex items-center gap-2 text-sm"
        >
          <div className={`w-1.5 h-1.5 rounded-full bg-${color}-400`} />
          <span>{feature}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

interface MissionPointProps {
  title: string;
  description: string;
}

const MissionPoint = ({ title, description }: MissionPointProps) => (
  <div className="text-center">
    <h4 className="font-semibold text-lg mb-2">{title}</h4>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default PhilosophySection;