"use client";

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SimulatedPnLProps {
  results: any;
}

const SimulatedPnL = ({ results }: SimulatedPnLProps) => {
  const pnlData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 120 },
    { month: 'Mar', value: 95 },
    { month: 'Apr', value: 140 },
    { month: 'May', value: 180 },
    { month: 'Jun', value: 160 },
    { month: 'Jul', value: 220 },
    { month: 'Aug', value: 200 },
    { month: 'Sep', value: 280 },
    { month: 'Oct', value: 250 },
    { month: 'Nov', value: 320 },
    { month: 'Dec', value: 300 }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
              <DollarSign className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                📊 <span className="text-gradient">Simulated P&L: From Data to Drama</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Turning Performance into Storytelling
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Your equity curve deserves a plotline. Your backtest isn't just a scorecard—it's a character arc. 
              EtherEdge wraps your P&L in an experience that shows not just what happened, but why.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PnLFeature
                icon={<TrendingUp className="h-5 w-5" />}
                title="🔥 Results are more than technical—they're cinematic"
                description="Backgrounds change color depending on performance (e.g., green glow for outperforming, red for drawdowns)"
                color="orange"
              />
              <PnLFeature
                icon={<AlertTriangle className="h-5 w-5" />}
                title="📈 'Edge On Fire!' when returns exceed 200%"
                description="Emojis respond in real-time to your strategy's performance"
                color="green"
              />
              <PnLFeature
                icon={<TrendingDown className="h-5 w-5" />}
                title="❄️ 'Overfitting Detected' if your test collapses"
                description="Commentary bots narrate key moments with insights"
                color="blue"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* P&L Curve */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">P&L Curve</h3>
            
            <div className="aspect-[4/3] rounded-lg bg-secondary/20 border border-white/10 p-4 relative overflow-hidden">
              {/* Mock P&L Chart */}
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <linearGradient id="pnlGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={60 + i * 48}
                    x2="400"
                    y2={60 + i * 48}
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    className="text-foreground"
                  />
                ))}
                
                {/* P&L Line */}
                <motion.path
                  d="M 20 250 Q 60 200 100 220 T 180 180 T 260 120 T 340 140 L 380 100"
                  stroke="#10b981"
                  strokeWidth="3"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                
                {/* Fill area */}
                <motion.path
                  d="M 20 250 Q 60 200 100 220 T 180 180 T 260 120 T 340 140 L 380 100 L 380 250 L 20 250 Z"
                  fill="url(#pnlGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                
                {/* Annotation points */}
                {[
                  { x: 100, y: 220, label: '🟢', profit: true },
                  { x: 180, y: 180, label: '🟢', profit: true },
                  { x: 260, y: 120, label: '🟢', profit: true },
                  { x: 340, y: 140, label: '🔴', profit: false }
                ].map((point, i) => (
                  <motion.g key={i}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r="4"
                      fill={point.profit ? "#10b981" : "#ef4444"}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.5 + i * 0.2 }}
                    />
                    <motion.text
                      x={point.x}
                      y={point.y - 15}
                      textAnchor="middle"
                      className="text-xs fill-current"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.7 + i * 0.2 }}
                    >
                      {point.label}
                    </motion.text>
                  </motion.g>
                ))}
              </svg>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              With annotation points that mark major trade entries and exits, color-coded by outcome 
              (🟢 for profit, 🔴 for loss).
            </p>
          </motion.div>

          {/* Drawdown Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Drawdown Visualization</h3>
              
              <div className="aspect-video rounded-lg bg-secondary/20 border border-white/10 p-4 relative overflow-hidden">
                {/* Heatmap-style drawdown visualization */}
                <div className="grid grid-cols-12 gap-1 h-full">
                  {Array.from({ length: 60 }, (_, i) => {
                    const intensity = Math.random();
                    return (
                      <motion.div
                        key={i}
                        className={cn(
                          "rounded-sm",
                          intensity > 0.7 ? "bg-red-500/80" :
                          intensity > 0.4 ? "bg-red-500/50" :
                          intensity > 0.2 ? "bg-red-500/30" :
                          "bg-red-500/10"
                        )}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: i * 0.02 }}
                      />
                    );
                  })}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Heatmap-based drawdown charts that reveal how deep your edge bled before recovering.
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Alpha Score</h4>
              
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-secondary/30"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 87 / 100)}`}
                    className="text-primary"
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - 87 / 100) }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">87</span>
                </div>
              </div>
              
              <p className="text-center text-sm text-muted-foreground">
                An EtherEdge-exclusive metric that combines risk-adjusted return, reactivity, and recovery speed.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Real-time Emojis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Real-time Emojis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EmojiCard
                emoji="📈"
                title="Edge On Fire!"
                description="when returns exceed 200%"
                isActive={true}
              />
              <EmojiCard
                emoji="❄️"
                title="Overfitting Detected"
                description="if your test collapses under different epochs"
                isActive={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PnLFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const PnLFeature = ({ icon, title, description, color }: PnLFeatureProps) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
    <div className={cn(
      "p-2 rounded-lg flex-shrink-0",
      color === 'orange' ? "bg-orange-500/20 text-orange-400" :
      color === 'green' ? "bg-green-500/20 text-green-400" :
      "bg-blue-500/20 text-blue-400"
    )}>
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

interface EmojiCardProps {
  emoji: string;
  title: string;
  description: string;
  isActive: boolean;
}

const EmojiCard = ({ emoji, title, description, isActive }: EmojiCardProps) => (
  <div className={cn(
    "flex items-center gap-4 p-4 rounded-lg border transition-all",
    isActive 
      ? "border-green-500/50 bg-green-500/10" 
      : "border-white/10 bg-secondary/30"
  )}>
    <div className="text-3xl">{emoji}</div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    {isActive && (
      <div className="ml-auto">
        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
      </div>
    )}
  </div>
);


export default SimulatedPnL;