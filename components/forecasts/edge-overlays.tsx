"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, Settings, BarChart3, PieChart, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const EdgeOverlays = () => {
  const [selectedOverlay, setSelectedOverlay] = useState('feature-influence');
  const [hoveredPoint, setHoveredPoint] = useState<any>(null);

  const overlayTypes = [
    { id: 'feature-influence', name: 'Feature Influence', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'model-logic', name: 'Model Logic', icon: <Eye className="h-4 w-4" /> },
    { id: 'contribution-weights', name: 'Contribution Weights', icon: <PieChart className="h-4 w-4" /> },
    { id: 'edge-blocks', name: 'Edge Block Tags', icon: <Layers className="h-4 w-4" /> }
  ];

  const mockFeatureData = [
    { name: '7-day Momentum', value: 40, color: 'blue' },
    { name: 'Bollinger Band Width', value: 25, color: 'purple' },
    { name: 'Edge Block X', value: 35, color: 'green' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glassmorphism rounded-2xl p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
            🖱️ <span>Edge Overlays</span>
          </h2>
          <p className="text-sm text-muted-foreground">Hover. Reveal. Understand.</p>
        </div>
        
        <button className="flex items-center gap-2 px-3 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
          <Settings className="h-4 w-4" />
          Customize View
        </button>
      </div>

      {/* Overlay Type Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {overlayTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedOverlay(type.id)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all",
              selectedOverlay === type.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
            )}
          >
            {type.icon}
            {type.name}
          </button>
        ))}
      </div>

      {/* Interactive Chart Area */}
      <div className="relative">
        <div className="aspect-[16/10] rounded-xl bg-secondary/20 border border-white/10 p-6 relative overflow-hidden">
          {/* Mock Chart Background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 250">
              <path
                d="M 0 200 Q 100 150 200 120 T 400 100"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-primary"
              />
            </svg>
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 h-full">
            {selectedOverlay === 'feature-influence' && (
              <FeatureInfluenceOverlay data={mockFeatureData} />
            )}
            
            {selectedOverlay === 'model-logic' && (
              <ModelLogicOverlay />
            )}
            
            {selectedOverlay === 'contribution-weights' && (
              <ContributionWeightsOverlay data={mockFeatureData} />
            )}
            
            {selectedOverlay === 'edge-blocks' && (
              <EdgeBlocksOverlay />
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
          <Layers className="h-4 w-4" />
          Edge Block Tags
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
          <PieChart className="h-4 w-4" />
          Contribution Weights
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
          <Eye className="h-4 w-4" />
          Model Logic
        </button>
      </div>
    </motion.div>
  );
};

const FeatureInfluenceOverlay = ({ data }: { data: any[] }) => (
  <div className="h-full flex flex-col justify-center">
    <h3 className="text-lg font-semibold mb-4">🧩 Feature Influence Breakdown</h3>
    <div className="space-y-3">
      {data.map((feature, index) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="w-24 text-sm">{feature.name}</div>
          <div className="flex-1 bg-secondary/30 rounded-full h-2 overflow-hidden">
            <motion.div
              className={cn(
                "h-full rounded-full",
                feature.color === 'blue' ? "bg-blue-500" :
                feature.color === 'purple' ? "bg-purple-500" :
                "bg-green-500"
              )}
              initial={{ width: 0 }}
              animate={{ width: `${feature.value}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
            />
          </div>
          <div className="w-12 text-sm font-medium">{feature.value}%</div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ModelLogicOverlay = () => (
  <div className="h-full flex flex-col justify-center">
    <h3 className="text-lg font-semibold mb-4">🧠 Model Logic Snapshot</h3>
    <div className="glassmorphism rounded-lg p-4">
      <p className="text-sm mb-3">
        "Spike predicted due to divergence in RSI + whale inflow activity + low order book resistance."
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">RSI Divergence</span>
        <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Whale Activity</span>
        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Low Resistance</span>
      </div>
    </div>
  </div>
);

const ContributionWeightsOverlay = ({ data }: { data: any[] }) => (
  <div className="h-full flex items-center justify-center">
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-4">📊 Contribution Weights Chart</h3>
      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-conic from-blue-500 via-purple-500 to-green-500 flex items-center justify-center">
        <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center">
          <PieChart className="h-8 w-8 text-primary" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4">Interactive pie chart visualization</p>
    </div>
  </div>
);

const EdgeBlocksOverlay = () => (
  <div className="h-full flex flex-col justify-center">
    <h3 className="text-lg font-semibold mb-4">🏷️ Edge Block Tags</h3>
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
        <span className="text-sm">Liquidity Trap - Active</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="text-sm">Momentum Stack - Triggered</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="text-sm">Volatility Filter - Monitoring</span>
      </div>
    </div>
  </div>
);

export default EdgeOverlays;