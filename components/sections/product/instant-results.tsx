"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const InstantResults = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedDate, setSelectedDate] = useState('2024-03-20');

  const predictions = [
    {
      type: 'success',
      prediction: 'Predicted: $2,845',
      actual: 'Actual: $2,892',
      accuracy: '98.3%',
      confidence: 'High'
    },
    {
      type: 'warning',
      prediction: 'Predicted: $2,750',
      actual: 'Actual: $2,820',
      accuracy: '92.5%',
      confidence: 'Medium'
    },
    {
      type: 'error',
      prediction: 'Predicted: $3,100',
      actual: 'Actual: $2,950',
      
      accuracy: '85.2%',
      confidence: 'Low'
    }
  ];

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
            Instant Results:{' '}
            <span className="text-gradient">
              Test a Specific Date
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Enter any past date and see what EtherEdge would have predicted—then 
            compare it with what actually happened.
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
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Select Date</h3>
              </div>

              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-secondary/30 border border-white/10 rounded-lg px-4 py-3 mb-6"
              />

              <div className="space-y-4">
                {predictions.map((prediction, index) => (
                  <PredictionCard key={index} {...prediction} />
                ))}
              </div>

              <button className="w-full mt-6 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                Check Another Date
                <ArrowRight className="h-5 w-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Market Context</h3>
                <div className="space-y-4">
                  <ContextItem
                    label="Market Condition"
                    value="Bullish Trend"
                    color="green"
                  />
                  <ContextItem
                    label="Volatility"
                    value="Medium"
                    color="blue"
                  />
                  <ContextItem
                    label="Volume Profile"
                    value="Above Average"
                    color="purple"
                  />
                  <ContextItem
                    label="Sentiment"
                    value="Positive"
                    color="cyan"
                  />
                </div>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Key Events</h4>
                <div className="space-y-3">
                  <Event
                    time="09:30 UTC"
                    description="Major exchange listing announcement"
                  />
                  <Event
                    time="14:45 UTC"
                    description="Significant whale wallet movement"
                  />
                  <Event
                    time="18:20 UTC"
                    description="Network upgrade completion"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface PredictionCardProps {
  type: 'success' | 'warning' | 'error';
  prediction: string;
  actual: string;
  accuracy: string;
  confidence: string;
}

const PredictionCard = ({ type, prediction, actual, accuracy, confidence }: PredictionCardProps) => (
  <div className={cn(
    "p-4 rounded-lg border",
    type === 'success' ? "border-green-500/50 bg-green-500/5" :
    type === 'warning' ? "border-yellow-500/50 bg-yellow-500/5" :
    "border-red-500/50 bg-red-500/5"
  )}>
    <div className="flex items-start justify-between mb-2">
      <div>
        <p className="font-medium">{prediction}</p>
        <p className="text-sm text-muted-foreground">{actual}</p>
      </div>
      {type === 'success' ? (
        <CheckCircle2 className="h-5 w-5 text-green-400" />
      ) : type === 'warning' ? (
        <CheckCircle2 className="h-5 w-5 text-yellow-400" />
      ) : (
        <XCircle className="h-5 w-5 text-red-400" />
      )}
    </div>
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span>Accuracy: {accuracy}</span>
      <span>Confidence: {confidence}</span>
    </div>
  </div>
);

interface ContextItemProps {
  label: string;
  value: string;
  color: string;
}

const ContextItem = ({ label, value, color }: ContextItemProps) => (
  <div className="flex items-center justify-between">
    <span className="text-muted-foreground">{label}</span>
    <span className={cn(
      "px-3 py-1 rounded-full text-sm font-medium",
      color === "green" ? "bg-green-500/20 text-green-400" :
      color === "blue" ? "bg-blue-500/20 text-blue-400" :
      color === "purple" ? "bg-purple-500/20 text-purple-400" :
      "bg-cyan-500/20 text-cyan-400"
    )}>
      {value}
    </span>
  </div>
);

interface EventProps {
  time: string;
  description: string;
}

const Event = ({ time, description }: EventProps) => (
  <div className="flex items-start gap-3">
    <div className="text-sm font-medium text-primary">{time}</div>
    <div className="flex-1">
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

export default InstantResults;