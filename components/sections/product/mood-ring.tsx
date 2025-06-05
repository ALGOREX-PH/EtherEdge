"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Gauge, TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const MoodRing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedMood, setSelectedMood] = useState<string>('bullish');

  const moods = [
    {
      id: 'bullish',
      name: 'Bullish',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'green',
      description: 'Strong upward momentum with high confidence'
    },
    {
      id: 'bearish',
      name: 'Bearish',
      icon: <TrendingDown className="h-6 w-6" />,
      color: 'red',
      description: 'Downward pressure and negative sentiment'
    },
    {
      id: 'sideways',
      name: 'Sideways/Chop',
      icon: <Minus className="h-6 w-6" />,
      color: 'blue',
      description: 'Range-bound trading with low directional bias'
    },
    {
      id: 'panic',
      name: 'Panic/FUD',
      icon: <AlertTriangle className="h-6 w-6" />,
      color: 'purple',
      description: 'High volatility and market uncertainty'
    }
  ];

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 noise-bg z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mood Ring Simulator:{' '}
            <span className="text-gradient">
              The Market Has Feelings
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Markets aren't just numbers—they're collective psychology in action. 
            Watch how EtherEdge adapts its strategy based on market sentiment.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glassmorphism rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <Gauge className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Market Mood Selector</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={cn(
                      "feature-card text-left",
                      selectedMood === mood.id && "border-primary/50 bg-primary/5"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-lg inline-flex mb-3",
                      mood.color === "green" ? "bg-green-500/20 text-green-400" :
                      mood.color === "red" ? "bg-red-500/20 text-red-400" :
                      mood.color === "blue" ? "bg-blue-500/20 text-blue-400" :
                      "bg-purple-500/20 text-purple-400"
                    )}>
                      {mood.icon}
                    </div>
                    <h4 className="font-medium text-lg mb-1">{mood.name}</h4>
                    <p className="text-sm text-muted-foreground">{mood.description}</p>
                  </button>
                ))}
              </div>

              <div className="bg-secondary/30 rounded-lg p-4">
                <h4 className="font-medium mb-2">Current Market Indicators</h4>
                <div className="space-y-2">
                  <Indicator name="Fear & Greed Index" value={72} />
                  <Indicator name="Volatility Index" value={45} />
                  <Indicator name="Social Sentiment" value={83} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Strategy Adaptation</h3>
                <div className="space-y-4">
                  <AdaptationCard
                    title="Signal Weights"
                    description="Technical indicators gain more weight during trending markets"
                    active={selectedMood === 'bullish' || selectedMood === 'bearish'}
                  />
                  <AdaptationCard
                    title="Time Horizons"
                    description="Shorter prediction windows during high volatility"
                    active={selectedMood === 'panic'}
                  />
                  <AdaptationCard
                    title="Confidence Bands"
                    description="Wider bands during uncertain market conditions"
                    active={selectedMood === 'sideways' || selectedMood === 'panic'}
                  />
                </div>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Historical Performance</h4>
                <p className="text-muted-foreground mb-6">
                  See how the model performed during similar market conditions in the past.
                </p>
                <div className="aspect-video rounded-lg bg-secondary/30 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Performance visualization coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface IndicatorProps {
  name: string;
  value: number;
}

const Indicator = ({ name, value }: IndicatorProps) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-muted-foreground">{name}</span>
    <div className="w-32 h-2 bg-secondary/50 rounded-full overflow-hidden">
      <div
        className="h-full bg-primary rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

interface AdaptationCardProps {
  title: string;
  description: string;
  active: boolean;
}

const AdaptationCard = ({ title, description, active }: AdaptationCardProps) => (
  <div className={cn(
    "p-4 rounded-lg border transition-colors",
    active
      ? "border-primary/50 bg-primary/5"
      : "border-white/10 bg-secondary/30"
  )}>
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default MoodRing;