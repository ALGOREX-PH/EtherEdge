"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Calendar, BarChart3, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const HistoricalReplay = () => {
  const [selectedDate, setSelectedDate] = useState('2023-06-15');
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const historicalData = [
    { date: '2023-06-15', event: 'Shanghai Upgrade', impact: 'High', accuracy: 92.4 },
    { date: '2023-03-22', event: 'Banking Crisis', impact: 'High', accuracy: 89.1 },
    { date: '2023-05-17', event: 'ETF Rumors', impact: 'Medium', accuracy: 94.7 },
    { date: '2023-12-01', event: 'DeFi Winter', impact: 'High', accuracy: 87.3 }
  ];

  const metrics = {
    rsiDivergence: 76,
    accuracy: 92.4,
    keyEvent: 'Shanghai Upgrade'
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="glassmorphism rounded-2xl p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            🕰️ <span>Historical Edge Replay</span>
          </h2>
          <p className="text-muted-foreground">Rewind. Learn. Sharpen.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
            <Calendar className="h-4 w-4" />
            Select Date
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors">
            <Play className="h-4 w-4" />
            Play Replay
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">ETH History Timeline</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Speed:</span>
            <select 
              value={playbackSpeed}
              onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
              className="bg-secondary/30 border border-white/10 rounded px-2 py-1 text-sm"
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={2}>2x</option>
              <option value={4}>4x</option>
            </select>
          </div>
        </div>
        
        <div className="relative">
          {/* Timeline Bar */}
          <div className="h-2 bg-secondary/30 rounded-full mb-6 relative overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-1/3" />
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background" />
          </div>
          
          {/* Timeline Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {historicalData.map((item, index) => (
              <TimelineEvent
                key={item.date}
                item={item}
                index={index}
                isSelected={selectedDate === item.date}
                onClick={() => setSelectedDate(item.date)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <button className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
          <SkipBack className="h-5 w-5" />
        </button>
        <button
          onClick={togglePlayback}
          className="p-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <button className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
          <SkipForward className="h-5 w-5" />
        </button>
      </div>

      {/* Current Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glassmorphism rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">📊 Feature Timeline Analysis</h4>
            <div className="aspect-[16/9] rounded-lg bg-secondary/20 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-primary mb-4 mx-auto opacity-50" />
                <p className="text-muted-foreground">
                  Interactive feature importance timeline for {selectedDate}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="glassmorphism rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
            <div className="space-y-4">
              <MetricItem
                label="RSI Divergence"
                value={`${metrics.rsiDivergence}%`}
                color="blue"
              />
              <MetricItem
                label="Forecast vs Actual"
                value={`${metrics.accuracy}%`}
                color="green"
              />
              <MetricItem
                label="Key Event"
                value={metrics.keyEvent}
                color="purple"
              />
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">🧠 Replay with Narration</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Coming Soon: EtherEdge will narrate key events as they unfolded—like a documentary of the market.
            </p>
            <button className="w-full bg-secondary/50 hover:bg-secondary/70 text-foreground px-4 py-2 rounded-lg transition-colors border border-white/10">
              Enable Narration
            </button>
          </div>
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
}

const TimelineEvent = ({ item, index, isSelected, onClick }: TimelineEventProps) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    onClick={onClick}
    className={cn(
      "p-4 rounded-lg border text-left transition-all",
      isSelected 
        ? "border-primary/50 bg-primary/10" 
        : "border-white/10 bg-secondary/10 hover:bg-secondary/20"
    )}
  >
    <div className="text-sm text-muted-foreground mb-1">{item.date}</div>
    <div className="font-medium mb-2">{item.event}</div>
    <div className="flex items-center justify-between text-sm">
      <span className={cn(
        "px-2 py-1 rounded text-xs",
        item.impact === 'High' ? "bg-red-500/20 text-red-400" :
        item.impact === 'Medium' ? "bg-yellow-500/20 text-yellow-400" :
        "bg-green-500/20 text-green-400"
      )}>
        {item.impact} Impact
      </span>
      <span className="text-muted-foreground">{item.accuracy}%</span>
    </div>
  </motion.button>
);

interface MetricItemProps {
  label: string;
  value: string;
  color: string;
}

const MetricItem = ({ label, value, color }: MetricItemProps) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">{label}</span>
    <span className={cn(
      "font-medium",
      color === 'blue' ? "text-blue-400" :
      color === 'green' ? "text-green-400" :
      "text-purple-400"
    )}>
      {value}
    </span>
  </div>
);

export default HistoricalReplay;