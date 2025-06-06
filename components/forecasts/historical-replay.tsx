"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Calendar, BarChart3, TrendingUp, Clock, Zap, Activity, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const HistoricalReplay = () => {
  const [selectedDate, setSelectedDate] = useState('2023-06-15');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentProgress, setCurrentProgress] = useState(33);

  const historicalData = [
    { 
      date: '2023-06-15', 
      event: 'Shanghai Upgrade', 
      impact: 'High', 
      accuracy: 92.4,
      description: 'Major network upgrade enabling staking withdrawals'
    },
    { 
      date: '2023-03-22', 
      event: 'Banking Crisis', 
      impact: 'High', 
      accuracy: 89.1,
      description: 'SVB collapse triggers crypto flight to safety'
    },
    { 
      date: '2023-05-17', 
      event: 'ETF Rumors', 
      impact: 'Medium', 
      accuracy: 94.7,
      description: 'BlackRock ETF filing sparks institutional interest'
    },
    { 
      date: '2023-12-01', 
      event: 'DeFi Winter', 
      impact: 'High', 
      accuracy: 87.3,
      description: 'Regulatory uncertainty impacts DeFi protocols'
    }
  ];

  const metrics = {
    rsiDivergence: 76,
    accuracy: 92.4,
    keyEvent: 'Shanghai Upgrade',
    volatility: 45,
    volume: 156
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const impactColors = {
    High: 'bg-red-500/20 text-red-400 border-red-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    Low: 'bg-green-500/20 text-green-400 border-green-500/30'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      className="glassmorphism rounded-2xl p-8 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"
          animate={{ 
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "linear-gradient(225deg, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Enhanced Header */}
      <motion.div 
        className="flex items-center justify-between mb-10 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="p-2 rounded-xl bg-purple-500/20"
            >
              🕰️
            </motion.div>
            <span className="text-gradient">Historical Edge Replay</span>
          </h2>
          <p className="text-lg text-muted-foreground">Rewind. Learn. Sharpen.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <motion.button 
            className="flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary/70 rounded-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="h-5 w-5 group-hover:text-primary transition-colors" />
            <span className="font-medium">Select Date</span>
          </motion.button>
          <motion.button 
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 group"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Play Replay</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Enhanced Timeline */}
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">ETH History Timeline</h3>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Speed:</span>
            <select 
              value={playbackSpeed}
              onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
              className="bg-secondary/30 border border-white/10 rounded-lg px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={2}>2x</option>
              <option value={4}>4x</option>
            </select>
          </div>
        </div>
        
        <div className="relative">
          {/* Enhanced Timeline Bar */}
          <div className="h-4 bg-secondary/30 rounded-full mb-8 relative overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${currentProgress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
              style={{ left: `${currentProgress}%` }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Timeline markers */}
            {[25, 50, 75].map((pos, i) => (
              <div
                key={i}
                className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/50 rounded-full"
                style={{ left: `${pos}%` }}
              />
            ))}
          </div>
          
          {/* Enhanced Timeline Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalData.map((item, index) => (
              <TimelineEvent
                key={item.date}
                item={item}
                index={index}
                isSelected={selectedDate === item.date}
                onClick={() => setSelectedDate(item.date)}
                impactColor={impactColors[item.impact as keyof typeof impactColors]}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Enhanced Playback Controls */}
      <motion.div 
        className="flex items-center justify-center gap-6 mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.button 
          className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <SkipBack className="h-6 w-6 group-hover:text-primary transition-colors" />
        </motion.button>
        <motion.button
          onClick={togglePlayback}
          className="p-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/20 group"
          whileHover={{ scale: 1.1, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Pause className="h-8 w-8" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Play className="h-8 w-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
        <motion.button 
          className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <SkipForward className="h-6 w-6 group-hover:text-primary transition-colors" />
        </motion.button>
      </motion.div>

      {/* Enhanced Current Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div 
            className="glassmorphism rounded-2xl p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold">📊 Feature Timeline Analysis</h4>
            </div>
            <div className="aspect-[16/9] rounded-xl bg-secondary/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
              {/* Enhanced Chart Visualization */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 150 Q 100 100 200 120 T 400 80"
                    stroke="url(#timelineGradient)"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </svg>
              </div>
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mb-4"
                >
                  <BarChart3 className="h-20 w-20 text-primary opacity-60 mx-auto" />
                </motion.div>
                <p className="text-lg text-muted-foreground">
                  Interactive feature importance timeline for {selectedDate}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="space-y-6">
          <motion.div 
            className="glassmorphism rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Key Metrics
            </h4>
            <div className="space-y-4">
              <MetricItem
                label="RSI Divergence"
                value={`${metrics.rsiDivergence}%`}
                color="blue"
                trend="up"
              />
              <MetricItem
                label="Forecast vs Actual"
                value={`${metrics.accuracy}%`}
                color="green"
                trend="up"
              />
              <MetricItem
                label="Volatility Index"
                value={`${metrics.volatility}%`}
                color="purple"
                trend="stable"
              />
              <MetricItem
                label="Volume Ratio"
                value={`${metrics.volume}%`}
                color="orange"
                trend="down"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="glassmorphism rounded-2xl p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              🧠 Replay with Narration
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Coming Soon: EtherEdge will narrate key events as they unfolded—like a documentary of the market.
            </p>
            <motion.button 
              className="w-full bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-3 rounded-xl transition-all duration-300 border border-white/10 font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enable Narration
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface TimelineEventProps {
  item: any;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  impactColor: string;
}

const TimelineEvent = ({ item, index, isSelected, onClick, impactColor }: TimelineEventProps) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    onClick={onClick}
    className={cn(
      "p-6 rounded-xl border text-left transition-all duration-300 group relative overflow-hidden",
      isSelected 
        ? "border-primary/50 bg-primary/10 shadow-lg shadow-primary/20" 
        : "border-white/10 bg-secondary/10 hover:bg-secondary/20 hover:border-primary/30"
    )}
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {/* Selection Indicator */}
    {isSelected && (
      <motion.div
        className="absolute top-3 right-3 w-3 h-3 bg-primary rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    )}

    <div className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
      <Clock className="h-4 w-4" />
      {item.date}
    </div>
    <div className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
      {item.event}
    </div>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
      {item.description}
    </p>
    <div className="flex items-center justify-between text-sm">
      <span className={cn(
        "px-3 py-1 rounded-lg text-xs font-medium border",
        impactColor
      )}>
        {item.impact} Impact
      </span>
      <div className="flex items-center gap-2">
        <Activity className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{item.accuracy}%</span>
      </div>
    </div>
  </motion.button>
);

interface MetricItemProps {
  label: string;
  value: string;
  color: string;
  trend: 'up' | 'down' | 'stable';
}

const MetricItem = ({ label, value, color, trend }: MetricItemProps) => (
  <motion.div 
    className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
    whileHover={{ scale: 1.02 }}
  >
    <span className="text-sm text-muted-foreground">{label}</span>
    <div className="flex items-center gap-2">
      <span className={cn(
        "font-medium",
        color === 'blue' ? "text-blue-400" :
        color === 'green' ? "text-green-400" :
        color === 'purple' ? "text-purple-400" :
        "text-orange-400"
      )}>
        {value}
      </span>
      <div className={cn(
        "w-2 h-2 rounded-full",
        trend === 'up' ? "bg-green-400" :
        trend === 'down' ? "bg-red-400" :
        "bg-yellow-400"
      )} />
    </div>
  </motion.div>
);

export default HistoricalReplay;