"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { LineChart, Brain, Network, Sliders } from 'lucide-react';

const Modeling = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [coefficients, setCoefficients] = useState({
    price: 0.5,
    volume: 0.3,
    sentiment: 0.2
  });

  const handleSliderChange = (feature: keyof typeof coefficients, value: number) => {
    setCoefficients(prev => ({ ...prev, [feature]: value }));
  };

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
            3. Modeling:{' '}
            <span className="text-gradient">
              A Tactical Brain with Transparent Logic
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            EtherEdge doesn't believe in hype. No mysterious black-box deep learning. 
            No overfitting transformer worship. Instead, it uses elegantly tuned classical 
            models that deliver explainability and accuracy.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Model Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glassmorphism rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <LineChart className="h-6 w-6 text-primary" />
                Live Model Preview
              </h3>

              <div className="aspect-square rounded-lg bg-secondary/30 p-4 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Network className="h-24 w-24 text-primary mb-4 mx-auto" />
                  <p className="text-muted-foreground">
                    Interactive model visualization coming soon
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Price Weight: {coefficients.price}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={coefficients.price}
                    onChange={(e) => handleSliderChange('price', parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Volume Weight: {coefficients.volume}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={coefficients.volume}
                    onChange={(e) => handleSliderChange('volume', parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Sentiment Weight: {coefficients.sentiment}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={coefficients.sentiment}
                    onChange={(e) => handleSliderChange('sentiment', parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Model Explanation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Classical Models</h3>
                </div>
                <p className="text-muted-foreground">
                  Linear regression and ensemble methods, carefully tuned for 
                  robustness and interpretability. Every prediction can be traced 
                  back to its inputs.
                </p>
              </div>

              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400">
                    <Sliders className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Interactive Tuning</h3>
                </div>
                <p className="text-muted-foreground">
                  Adjust model parameters in real-time and see how predictions change. 
                  Understanding the relationship between inputs and outputs is key to 
                  building trust.
                </p>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Why This Matters</h4>
                <p className="text-muted-foreground">
                  In crypto, it's not just what the model says—it's why it says it. 
                  Our approach prioritizes understanding over complexity, giving you 
                  the confidence to act on predictions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Modeling;