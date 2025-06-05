"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, LineChart, Eye, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Interpretability = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            4. Interpretability:{' '}
            <span className="text-gradient">
              Reading the Model's Mind
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Here, EtherEdge opens its brain. Watch as feature importance heatmaps 
            flare up with every scroll, revealing the model's decision-making process 
            in real-time.
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
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Feature Importance</h3>
              </div>

              <div className="space-y-4">
                <FeatureBar 
                  label="Gas Fee Spike"
                  value={85}
                  color="blue"
                />
                <FeatureBar 
                  label="Whale Accumulation"
                  value={72}
                  color="purple"
                />
                <FeatureBar 
                  label="Social Sentiment"
                  value={64}
                  color="pink"
                />
                <FeatureBar 
                  label="Technical Indicators"
                  value={58}
                  color="green"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Live Insights</h3>
                </div>
                <p className="text-muted-foreground">
                  Watch how specific features react to market events in real-time.
                  Toggle events to see which features gained or lost predictive power.
                </p>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                    <AlertCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Event Analysis</h3>
                </div>
                <p className="text-muted-foreground">
                  Scroll past key events—like the Merge or major ETF announcements—and 
                  see how specific features react and adapt.
                </p>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Why This Matters</h4>
                <p className="text-muted-foreground">
                  This is model explainability not as a report—but as a living, 
                  breathing conversation. Understanding why a model makes certain 
                  decisions is crucial for building trust and making informed trading 
                  decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureBarProps {
  label: string;
  value: number;
  color: string;
}

const FeatureBar = ({ label, value, color }: FeatureBarProps) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span className="font-medium">{value}%</span>
    </div>
    <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className={cn(
          "h-full rounded-full",
          color === "blue" ? "bg-blue-500" :
          color === "purple" ? "bg-purple-500" :
          color === "pink" ? "bg-pink-500" :
          "bg-green-500"
        )}
      />
    </div>
  </div>
);

export default Interpretability;