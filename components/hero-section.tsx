"use client";

import { useEffect, useRef } from 'react';
import { Zap, TrendingUp, LineChart, BarChart4 } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, Math.floor(window.innerWidth / 20));
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        const colors = [
          'rgba(66, 135, 245, 0.7)',  // Blue
          'rgba(191, 90, 242, 0.7)',   // Purple
          'rgba(10, 207, 131, 0.7)',   // Green
          'rgba(242, 90, 191, 0.7)',   // Pink
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Initialize particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw connections
      connectParticles();
      
      requestAnimationFrame(animate);
    };
    
    // Connect nearby particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = 1 - distance / 100;
            ctx.strokeStyle = `rgba(140, 180, 255, ${opacity * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full opacity-60"
      />
      
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30" />
      
      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center py-2 px-4 mb-6 rounded-full bg-secondary/40 border border-primary/20 text-sm font-medium backdrop-blur-sm">
          <Zap className="h-4 w-4 text-primary mr-2" />
          Data-driven. Battle-tested. Built to sharpen your crypto edge.
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
          <span className="text-gradient glow">Reclaim Your Crypto Edge</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Where simplicity scales, transparency builds trust, and consistency wins in the long game.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#get-started"
            className={cn(
              "px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200",
              "bg-primary text-primary-foreground hover:bg-primary/90",
              "shadow-lg shadow-primary/20 hover:shadow-primary/40",
              "flex items-center justify-center gap-2"
            )}
          >
            Get Started <ArrowIcon />
          </a>
          <a 
            href="#features"
            className={cn(
              "px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200",
              "bg-secondary/50 text-foreground hover:bg-secondary/70",
              "border border-white/10",
              "flex items-center justify-center gap-2"
            )}
          >
            Explore Features
          </a>
        </div>
        
        {/* Feature icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          <FeatureIcon 
            icon={<LineChart className="h-8 w-8 text-primary" />} 
            title="Price Prediction"
            description="Accurate ETH price forecasts with confidence bands"
            delay="0"
          />
          <FeatureIcon 
            icon={<BarChart4 className="h-8 w-8 text-pink-500" />} 
            title="Data Visualization"
            description="Rich, interactive visualizations make predictions explainable"
            delay="200"
          />
          <FeatureIcon 
            icon={<TrendingUp className="h-8 w-8 text-green-500" />} 
            title="Signal Detection"
            description="High-confidence signals from price and volume data"
            delay="400"
          />
          <FeatureIcon 
            icon={<Zap className="h-8 w-8 text-cyan-500" />} 
            title="Open Source"
            description="Fully transparent, forkable Jupyter notebook workflow"
            delay="600"
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-2" />
        </div>
      </div>
    </section>
  );
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33325 8.00004H12.6666M12.6666 8.00004L7.99992 3.33337M12.6666 8.00004L7.99992 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface FeatureIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureIcon = ({ icon, title, description, delay }: FeatureIconProps) => (
  <div 
    className="glassmorphism rounded-xl p-6 text-center flex flex-col items-center animate-float"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="mb-3">{icon}</div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default HeroSection;