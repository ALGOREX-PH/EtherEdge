"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Github, FileCode, Youtube, Zap } from 'lucide-react';

const GetStartedSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    setEmail('');
  };
  
  return (
    <section id="get-started" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Getting Started:</span> Your Edge Awaits
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jump in. Fork the code. Join the community.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glassmorphism rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Join the Community</h3>
            
            <p className="text-lg mb-6">
              EtherEdge is more than just software—it's a movement of edge-seekers, 
              data enthusiasts, and traders committed to transparency and continuous improvement.
            </p>
            
            <form onSubmit={handleSubmit} className="mb-8">
              <label htmlFor="email" className="block mb-2 font-medium">
                Get early access and updates:
              </label>
              <div className="flex">
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 bg-secondary/50 border border-white/10 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
                <button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-r-lg transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
            
            <h4 className="font-semibold mb-3">Connect with us:</h4>
            <div className="grid grid-cols-2 gap-4">
              <SocialButton 
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
                description="Fork the codebase"
              />
              <SocialButton 
                icon={<Youtube className="h-5 w-5" />}
                label="YouTube"
                description="Tutorials & demos"
              />
              <SocialButton 
                icon={<FileCode className="h-5 w-5" />}
                label="Documentation"
                description="Learn the platform"
              />
              <SocialButton 
                icon={<Zap className="h-5 w-5" />}
                label="Discord"
                description="Join the discussion"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quick Start Guide</h3>
              
              <div className="space-y-4">
                <Step 
                  number="01" 
                  title="Fork the Repository" 
                  description="Get the entire codebase on GitHub or Kaggle."
                />
                <Step 
                  number="02" 
                  title="Run the Notebooks" 
                  description="Execute the ETH prediction model with your own parameters."
                />
                <Step 
                  number="03" 
                  title="Join the Discord" 
                  description="Connect with the community for help and collaboration."
                />
                <Step 
                  number="04" 
                  title="Make It Your Own" 
                  description="Customize features, try new assets, build your edge."
                />
              </div>
            </div>
            
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Final Word</h3>
              
              <blockquote className="text-lg italic mb-4">
                "In the end, markets reward those who see through the noise.
                EtherEdge is your lens—crafted for clarity, shaped for mastery, powered by you."
              </blockquote>
              
              <div className="text-center mt-6">
                <p className="text-lg font-medium mb-4">Trade smarter. Build bolder. Learn faster.</p>
                <p className="text-xl text-primary font-bold">Manifest your edge. Welcome to EtherEdge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  description: string;
}

const SocialButton = ({ icon, label, description }: SocialButtonProps) => (
  <a 
    href="#"
    className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors border border-white/10"
  >
    <div className="p-2 rounded-lg bg-primary/20 text-primary">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{label}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </a>
);

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
      {number}
    </div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default GetStartedSection;