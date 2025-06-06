"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Eye, Settings, BarChart3, PieChart, Layers, Zap, Brain, Target, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const EdgeOverlays = () => {
  const [selectedOverlay, setSelectedOverlay] = useState('feature-influence');
  const [hoveredPoint, setHoveredPoint] = useState<any>(null);
  const [showCustomization, setShowCustomization] = useState(false);

  const overlayTypes = [
    { 
      id: 'feature-influence', 
      name: 'Feature Influence', 
      icon: <BarChart3 className="h-4 w-4" />,
      description: 'See which features drive predictions'
    },
    { 
      id: 'model-logic', 
      name: 'Model Logic', 
      icon: <Brain className="h-4 w-4" />,
      description: 'Understand the reasoning behind predictions'
    },
    { 
      id: 'contribution-weights', 
      name: 'Contribution Weights', 
      icon: <PieChart className="h-4 w-4" />,
      description: 'Visual breakdown of signal contributions'
    },
    { 
      id: 'edge-blocks', 
      name: 'Edge Block Tags', 
      icon: <Layers className="h-4 w-4" />,
      description: 'Track custom signal stacks'
    }
  ];

  const mockFeatureData = [
    { name: '7-day Momentum', value: 40, color: 'blue', trend: 'up' },
    { name: 'Bollinger Band Width', value: 25, color: 'purple', trend: 'stable' },
    { name: 'Edge Block X', value: 35, color: 'green', trend: 'down' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="glassmorphism rounded-2xl p-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
          animate={{ 
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "linear-gradient(315deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Enhanced Header */}
      <motion.div 
        className="flex items-center justify-between mb-8 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="p-2 rounded-xl bg-primary/20"
            >
              🖱️
            </motion.div>
            <span className="text-gradient">Edge Overlays</span>
          </h2>
          <p className="text-muted-foreground">Hover. Reveal. Understand.</p>
        </div>
        
        <motion.button 
          className="flex items-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary/70 rounded-xl transition-all duration-300 group"
          onClick={() => setShowCustomization(!showCustomization)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="font-medium">Customize View</span>
        </motion.button>
      </motion.div>

      {/* Enhanced Overlay Type Selector */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {overlayTypes.map((type, index) => (
          <motion.button
            key={type.id}
            onClick={() => setSelectedOverlay(type.id)}
            className={cn(
              "flex items-start gap-3 p-4 rounded-xl text-left transition-all duration-300 group relative overflow-hidden",
              selectedOverlay === type.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
            )}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
          >
            {selectedOverlay === type.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                layoutId="overlayBackground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className={cn(
              "p-2 rounded-lg transition-all duration-300",
              selectedOverlay === type.id ? "bg-primary-foreground/20" : "bg-primary/20"
            )}>
              {type.icon}
            </div>
            <div className="relative z-10">
              <h4 className="font-semibold mb-1">{type.name}</h4>
              <p className="text-sm opacity-75">{type.description}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Enhanced Interactive Chart Area */}
      <motion.div 
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="aspect-[16/10] rounded-2xl bg-secondary/20 border border-white/10 p-8 relative overflow-hidden backdrop-blur-sm">
          {/* Enhanced Mock Chart Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 250">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 0 200 Q 100 150 200 120 T 400 100"
                stroke="url(#chartGradient)"
                strokeWidth="3"
                fill="none"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Data Points */}
              {[100, 200, 300].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={150 - i * 20}
                  r="4"
                  fill="currentColor"
                  className="text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + i * 0.2 }}
                />
              ))}
            </svg>
          </div>

          {/* Dynamic Overlay Content */}
          <div className="relative z-10 h-full">
            <AnimatePresence mode="wait">
              {selectedOverlay === 'feature-influence' && (
                <FeatureInfluenceOverlay key="feature\" data={mockFeatureData} />
              )}
              
              {selectedOverlay === 'model-logic' && (
                <ModelLogicOverlay key="logic" />
              )}
              
              {selectedOverlay === 'contribution-weights' && (
                <ContributionWeightsOverlay key="weights\" data={mockFeatureData} />
              )}
              
              {selectedOverlay === 'edge-blocks' && (
                <EdgeBlocksOverlay key="blocks" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Action Buttons */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.button 
          className="flex items-center gap-3 px-4 py-3 bg-secondary/50 hover:bg-secondary/70 rounded-xl transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Layers className="h-5 w-5 group-hover:text-primary transition-colors" />
          <span className="font-medium">Edge Block Tags</span>
        </motion.button>
        <motion.button 
          className="flex items-center gap-3 px-4 py-3 bg-secondary/50 hover:bg-secondary/70 rounded-xl transition-all duration-300 group"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <PieChart className="h-5 w-5 group-hover:text-primary transition-colors" />
          <span className="font-medium">Contribution Weights</span>
        </motion.button>
        <motion.button 
          className="flex items-center gap-3 px-4 py-3 bg-primary/90 hover:bg-primary text-primary-foreground rounded-xl transition-all duration-300 group shadow-lg shadow-primary/20"
          whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          <Eye className="h-5 w-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">Model Logic</span>
        </motion.button>
      </motion.div>

      {/* Customization Panel */}
      <AnimatePresence>
        {showCustomization && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-white/10 overflow-hidden"
          >
            <h4 className="font-semibold mb-4">Overlay Customization</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Opacity</label>
                <input type="range" min="0" max="100" defaultValue="80" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Update Frequency</label>
                <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2">
                  <option>Real-time</option>
                  <option>Every 5 seconds</option>
                  <option>Every 30 seconds</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FeatureInfluenceOverlay = ({ data }: { data: any[] }) => (
  <motion.div 
    className="h-full flex flex-col justify-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-primary/20 text-primary">
        <BarChart3 className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold">🧩 Feature Influence Breakdown</h3>
    </div>
    <div className="space-y-4">
      {data.map((feature, index) => (
        <motion.div
          key={feature.name}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-32 text-sm font-medium">{feature.name}</div>
            <div className="flex-1 bg-secondary/30 rounded-full h-3 overflow-hidden relative">
              <motion.div
                className={cn(
                  "h-full rounded-full relative",
                  feature.color === 'blue' ? "bg-blue-500" :
                  feature.color === 'purple' ? "bg-purple-500" :
                  "bg-green-500"
                )}
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            <div className="w-16 text-sm font-bold">{feature.value}%</div>
            <div className={cn(
              "w-4 h-4 rounded-full",
              feature.trend === 'up' ? "bg-green-400" :
              feature.trend === 'down' ? "bg-red-400" :
              "bg-yellow-400"
            )} />
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ModelLogicOverlay = () => (
  <motion.div 
    className="h-full flex flex-col justify-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
        <Brain className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold">🧠 Model Logic Snapshot</h3>
    </div>
    <motion.div 
      className="glassmorphism rounded-xl p-6"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.p 
        className="text-lg mb-4 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        "Spike predicted due to divergence in RSI + whale inflow activity + low order book resistance."
      </motion.p>
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'RSI Divergence', color: 'blue' },
          { label: 'Whale Activity', color: 'purple' },
          { label: 'Low Resistance', color: 'green' }
        ].map((tag, index) => (
          <motion.span
            key={tag.label}
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium",
              `bg-${tag.color}-500/20 text-${tag.color}-400`
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {tag.label}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const ContributionWeightsOverlay = ({ data }: { data: any[] }) => (
  <motion.div 
    className="h-full flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
          <PieChart className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">📊 Contribution Weights Chart</h3>
      </div>
      <motion.div 
        className="relative w-40 h-40 mx-auto mb-6"
        initial={{ rotate: -90 }}
        animate={{ rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-conic from-blue-500 via-purple-500 to-green-500 flex items-center justify-center relative">
          <motion.div 
            className="w-24 h-24 bg-background rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <PieChart className="h-8 w-8 text-primary" />
          </motion.div>
          {/* Animated segments */}
          {data.map((item, index) => (
            <motion.div
              key={item.name}
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(from ${index * 120}deg, ${
                  item.color === 'blue' ? '#3b82f6' :
                  item.color === 'purple' ? '#8b5cf6' : '#10b981'
                } ${item.value}%, transparent ${item.value}%)`
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
      <p className="text-muted-foreground">Interactive pie chart visualization</p>
    </div>
  </motion.div>
);

const EdgeBlocksOverlay = () => (
  <motion.div 
    className="h-full flex flex-col justify-center"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
        <Layers className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold">🏷️ Edge Block Tags</h3>
    </div>
    <div className="space-y-4">
      {[
        { name: 'Liquidity Trap', status: 'Active', color: 'primary', pulse: true },
        { name: 'Momentum Stack', status: 'Triggered', color: 'green', pulse: false },
        { name: 'Volatility Filter', status: 'Monitoring', color: 'yellow', pulse: false }
      ].map((block, index) => (
        <motion.div
          key={block.name}
          className="flex items-center gap-4 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className={cn(
              "w-4 h-4 rounded-full",
              block.color === 'primary' ? "bg-primary" :
              block.color === 'green' ? "bg-green-400" :
              "bg-yellow-400"
            )}
            animate={block.pulse ? { 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            } : {}}
            transition={block.pulse ? { 
              duration: 2, 
              repeat: Infinity 
            } : {}}
          />
          <div className="flex-1">
            <span className="font-medium">{block.name}</span>
            <span className="text-sm text-muted-foreground ml-2">- {block.status}</span>
          </div>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default EdgeOverlays;