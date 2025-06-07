"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Puzzle, Plus, X, Code, Zap, TrendingUp, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StrategyBuilderProps {
  onStrategySelect: (strategy: string) => void;
  selectedStrategy: string | null;
}

const StrategyBuilder = ({ onStrategySelect, selectedStrategy }: StrategyBuilderProps) => {
  const [selectedBlocks, setSelectedBlocks] = useState<string[]>([]);
  const [showBuilder, setShowBuilder] = useState(false);

  const edgeBlocks = [
    { id: 'rsi-14', name: '14-day RSI', category: 'Technical', color: 'blue' },
    { id: 'volume-spike', name: 'Volume Spike Delta', category: 'Volume', color: 'green' },
    { id: 'whale-surge', name: 'Whale Wallet Surge', category: 'On-Chain', color: 'purple' },
    { id: 'mood-reversal', name: 'Mood Ring Reversal', category: 'Sentiment', color: 'pink' },
    { id: 'volatility-constriction', name: 'Volatility Constriction', category: 'Technical', color: 'amber' },
    { id: 'social-sentiment', name: 'Social Sentiment', category: 'Alternative', color: 'cyan' }
  ];

  const toggleBlock = (blockId: string) => {
    setSelectedBlocks(prev => 
      prev.includes(blockId)
        ? prev.filter(id => id !== blockId)
        : [...prev, blockId]
    );
  };

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
            <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400">
              <Puzzle className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                🧠 <span className="text-gradient">Strategy Building, Reinvented</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Drag-and-Drop Strategy Builder – No Code, All Clarity
              </p>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-6 mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              Forget spreadsheets. Forget scripts. The Arena introduces the visual quant canvas—an 
              intuitive system where you build your strategy like a symphony of logic, intuition, and signal science.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureHighlight
                icon={<Puzzle className="h-6 w-6" />}
                title="Edge Blocks"
                description="Choose from a constantly growing library of building blocks"
                color="blue"
              />
              <FeatureHighlight
                icon={<Code className="h-6 w-6" />}
                title="Signal Stacking"
                description="Combine blocks using logical operators and threshold parameters"
                color="purple"
              />
              <FeatureHighlight
                icon={<Zap className="h-6 w-6" />}
                title="Hyperlink Insights"
                description="Every block comes with inline tooltips, graphs, and history"
                color="green"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strategy Builder Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glassmorphism rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Strategy Builder
              </h3>
              <button
                onClick={() => setShowBuilder(!showBuilder)}
                className="bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg transition-colors"
              >
                {showBuilder ? 'Hide Builder' : 'Show Builder'}
              </button>
            </div>

            {showBuilder && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="font-semibold mb-4">Available Edge Blocks</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {edgeBlocks.map((block) => (
                      <button
                        key={block.id}
                        onClick={() => toggleBlock(block.id)}
                        className={cn(
                          "p-3 rounded-lg border text-left transition-all",
                          selectedBlocks.includes(block.id)
                            ? "border-primary/50 bg-primary/10"
                            : "border-white/10 bg-secondary/30 hover:bg-secondary/50"
                        )}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {selectedBlocks.includes(block.id) ? (
                            <X className="h-4 w-4 text-primary" />
                          ) : (
                            <Plus className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span className="font-medium text-sm">{block.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{block.category}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Signal Logic</h4>
                  <div className="font-mono text-sm bg-black/30 rounded p-3">
                    <span className="text-green-400">IF</span>{' '}
                    <span className="text-blue-400">Market Mood</span>{' '}
                    <span className="text-yellow-400">drops below</span>{' '}
                    <span className="text-pink-400">0.2</span>{' '}
                    <span className="text-green-400">AND</span>{' '}
                    <span className="text-blue-400">3-day volatility</span>{' '}
                    <span className="text-yellow-400">is under</span>{' '}
                    <span className="text-pink-400">1.5%</span>{' '}
                    <span className="text-cyan-400">→ BUY</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Visual Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glassmorphism rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">Visual Strategy Canvas</h3>
            
            <div className="aspect-square rounded-lg bg-secondary/20 border border-white/10 p-4 relative overflow-hidden">
              {/* Mock Strategy Visualization */}
              <div className="grid grid-cols-3 gap-4 h-full">
                {selectedBlocks.length > 0 ? (
                  selectedBlocks.map((blockId, index) => {
                    const block = edgeBlocks.find(b => b.id === blockId);
                    return (
                      <motion.div
                        key={blockId}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={cn(
                          "p-3 rounded-lg text-center flex flex-col items-center justify-center",
                          `bg-${block?.color}-500/20 border border-${block?.color}-500/30`
                        )}
                      >
                        <Activity className="h-6 w-6 mb-2" />
                        <span className="text-xs font-medium">{block?.name}</span>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-3 flex items-center justify-center h-full">
                    <div className="text-center text-muted-foreground">
                      <Puzzle className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p>Select Edge Blocks to build your strategy</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 font-medium text-center">
                💥 No coding means faster iteration. More experimentation. Better learning curves.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureHighlight = ({ icon, title, description, color }: FeatureHighlightProps) => (
  <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
    <div className={cn(
      "p-2 rounded-lg flex-shrink-0",
      color === 'blue' ? "bg-blue-500/20 text-blue-400" :
      color === 'purple' ? "bg-purple-500/20 text-purple-400" :
      "bg-green-500/20 text-green-400"
    )}>
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default StrategyBuilder;