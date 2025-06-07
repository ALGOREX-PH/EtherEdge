"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Play, Pause, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArenaEngineProps {
  strategy: string | null;
  onResultsUpdate: (results: any) => void;
}

const ArenaEngine = ({ strategy, onResultsUpdate }: ArenaEngineProps) => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentMetrics, setCurrentMetrics] = useState({
    sharpeRatio: 2.34,
    sortinoRatio: 3.12,
    winRate: 68,
    maxDrawdown: -32,
    alphaScore: 87
  });

  // Simulate backtest progress
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            onResultsUpdate(currentMetrics);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isRunning, currentMetrics, onResultsUpdate]);

  const startBacktest = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const resetBacktest = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 noise-bg z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
              <BarChart3 className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                📈 <span className="text-gradient">The Arena Engine</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Real-Time Simulation of Past Market Chaos
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Once your strategy is built, unleash it on history. The EtherEdge Arena runs it through 
              decades of real Ethereum market data, streaming simulation results through animated, 
              emotionally-responsive charts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <EngineFeature
                title="Cumulative Returns"
                description="Line graphs showing how your stack performed vs. HODL strategy"
                color="green"
              />
              <EngineFeature
                title="Market Replay Mode"
                description="Visualize how your signals would have triggered in actual historic volatility events"
                color="blue"
              />
              <EngineFeature
                title="Cinematic Results"
                description="Backgrounds change color depending on performance with commentary bots"
                color="purple"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Backtest Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Backtest Controls</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Time Period</label>
                <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-3">
                  <option>Last 2 Years</option>
                  <option>Last 1 Year</option>
                  <option>Last 6 Months</option>
                  <option>Custom Range</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Initial Capital</label>
                <input 
                  type="number" 
                  defaultValue={10000}
                  className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-3"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Rebalancing Frequency</label>
                <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-3">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={startBacktest}
                  disabled={isRunning}
                  className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <Pause className="h-5 w-5" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      Start Backtest
                    </>
                  )}
                </button>
                <button
                  onClick={resetBacktest}
                  className="px-4 py-3 bg-secondary/50 hover:bg-secondary/70 text-foreground rounded-lg transition-colors"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
              </div>
              
              {/* Progress Bar */}
              {(isRunning || progress > 0) && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glassmorphism rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Performance Metrics</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <MetricCard
                  label="Sharpe Ratio"
                  value={currentMetrics.sharpeRatio}
                  color="blue"
                  isGood={currentMetrics.sharpeRatio > 1}
                />
                <MetricCard
                  label="Sortino Ratio"
                  value={currentMetrics.sortinoRatio}
                  color="green"
                  isGood={currentMetrics.sortinoRatio > 1}
                />
                <MetricCard
                  label="Win Rate"
                  value={`${currentMetrics.winRate}%`}
                  color="purple"
                  isGood={currentMetrics.winRate > 50}
                />
                <MetricCard
                  label="Max Drawdown"
                  value={`${currentMetrics.maxDrawdown}%`}
                  color="red"
                  isGood={currentMetrics.maxDrawdown > -20}
                />
              </div>
            </div>

            <div className="glassmorphism rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Alpha Score</h4>
              <div className="relative">
                <div className="w-32 h-32 mx-auto">
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
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - currentMetrics.alphaScore / 100)}`}
                      className="text-primary"
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - currentMetrics.alphaScore / 100) }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{currentMetrics.alphaScore}</span>
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  An EtherEdge-exclusive metric that combines risk-adjusted return, reactivity, and recovery speed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Results Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="glassmorphism rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Market Replay Mode</h3>
            <div className="aspect-[16/9] rounded-lg bg-secondary/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <BarChart3 className="h-24 w-24 text-primary mx-auto mb-4 opacity-60" />
                <p className="text-lg text-muted-foreground">
                  {isRunning ? "Simulating strategy performance..." : "Start a backtest to see results"}
                </p>
              </div>
              
              {/* Animated background during simulation */}
              {isRunning && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span>🔥 Results are more than technical—they're cinematic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                <span>📈 "Edge On Fire!" when returns exceed 200%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface EngineFeatureProps {
  title: string;
  description: string;
  color: string;
}

const EngineFeature = ({ title, description, color }: EngineFeatureProps) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
    <div className={cn(
      "p-2 rounded-lg flex-shrink-0",
      color === 'green' ? "bg-green-500/20 text-green-400" :
      color === 'blue' ? "bg-blue-500/20 text-blue-400" :
      "bg-purple-500/20 text-purple-400"
    )}>
      <TrendingUp className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

interface MetricCardProps {
  label: string;
  value: string | number;
  color: string;
  isGood: boolean;
}

const MetricCard = ({ label, value, color, isGood }: MetricCardProps) => (
  <div className={cn(
    "p-4 rounded-lg border",
    isGood ? "border-green-500/30 bg-green-500/5" : "border-red-500/30 bg-red-500/5"
  )}>
    <div className="text-sm text-muted-foreground mb-1">{label}</div>
    <div className={cn(
      "text-2xl font-bold",
      isGood ? "text-green-400" : "text-red-400"
    )}>
      {value}
    </div>
  </div>
);


export default ArenaEngine;