"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Puzzle, Plus, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const EdgeBlocks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);

  const blocks = [
    {
      id: 'rsi',
      name: '7-Day RSI',
      category: 'Technical',
      color: 'blue'
    },
    {
      id: 'whale',
      name: 'Whale Accumulation',
      category: 'On-Chain',
      color: 'purple'
    },
    {
      id: 'funding',
      name: 'Funding Rate Shift',
      category: 'Market',
      color: 'green'
    },
    {
      id: 'volume',
      name: 'Volume Profile',
      category: 'Technical',
      color: 'pink'
    },
    {
      id: 'sentiment',
      name: 'Social Sentiment',
      category: 'Alternative',
      color: 'amber'
    },
    {
      id: 'gas',
      name: 'Gas Usage Pattern',
      category: 'On-Chain',
      color: 'cyan'
    }
  ];

  const toggleBlock = (blockId: string) => {
    setSelectedBlocks(prev => 
      prev.includes(blockId)
        ? prev.filter(id => id !== blockId)
        : [...prev, blockId]
    );
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
            Edge Blocks Demo:{' '}
            <span className="text-gradient">
              Build Your Own Signal Stack
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Here's where the tour becomes a lab. You become the strategist. 
            Combine feature cards into Edge Blocks to create your perfect signal stack.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glassmorphism rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Puzzle className="h-6 w-6 text-primary" />
                  Available Edge Blocks
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {blocks.map((block) => (
                    <button
                      key={block.id}
                      onClick={() => toggleBlock(block.id)}
                      className={cn(
                        "feature-card flex items-center gap-3",
                        selectedBlocks.includes(block.id) && "border-primary/50 bg-primary/5"
                      )}
                    >
                      {selectedBlocks.includes(block.id) ? (
                        <X className="h-5 w-5 text-primary" />
                      ) : (
                        <Plus className="h-5 w-5 text-muted-foreground" />
                      )}
                      <div className="text-left">
                        <p className="font-medium">{block.name}</p>
                        <p className="text-sm text-muted-foreground">{block.category}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Signal Modifiers</h4>
                <div className="space-y-3">
                  <Modifier label="High Volatility Only" />
                  <Modifier label="Exclude Weekend Data" />
                  <Modifier label="Apply Smoothing" />
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
                <h3 className="text-xl font-semibold mb-4">Your Signal Stack</h3>
                {selectedBlocks.length > 0 ? (
                  <div className="space-y-4">
                    {selectedBlocks.map((blockId) => {
                      const block = blocks.find(b => b.id === blockId)!;
                      return (
                        <div
                          key={blockId}
                          className="bg-secondary/30 rounded-lg p-4 flex items-center justify-between"
                        >
                          <div>
                            <p className="font-medium">{block.name}</p>
                            <p className="text-sm text-muted-foreground">{block.category}</p>
                          </div>
                          <button
                            onClick={() => toggleBlock(blockId)}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      );
                    })}
                    <button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                      Generate Predictions
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Puzzle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select Edge Blocks to build your stack</p>
                  </div>
                )}
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Performance Preview</h4>
                <div className="aspect-video rounded-lg bg-secondary/30 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Select blocks to see performance metrics
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

const Modifier = ({ label }: { label: string }) => (
  <label className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 cursor-pointer">
    <input type="checkbox" className="rounded border-white/20" />
    <span>{label}</span>
  </label>
);

export default EdgeBlocks;