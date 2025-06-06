"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Calendar, Download, RefreshCw, Zap, Target, Activity, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PriceForecastPanelProps {
  currentPrice: number;
  marketMood: 'bullish' | 'bearish' | 'volatile';
}

const PriceForecastPanel = ({ currentPrice, marketMood }: PriceForecastPanelProps) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('4H');
  const [prediction, setPrediction] = useState({
    price: 2389.52,
    change: 1.86,
    confidence: 87
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showConfidenceDetails, setShowConfidenceDetails] = useState(false);

  const timeframes = ['1H', '4H', '1D', '1W'];

  // Simulate prediction updates with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setPrediction(prev => ({
        price: currentPrice + (Math.random() - 0.5) * 100,
        change: (Math.random() - 0.5) * 5,
        confidence: Math.floor(Math.random() * 30) + 70
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, [currentPrice]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1500);
  };

  const confidenceColor = prediction.confidence >= 85 ? 'green' : 
                         prediction.confidence >= 70 ? 'yellow' : 'red';

  const confidenceLabel = prediction.confidence >= 85 ? 'High Confidence' :
                         prediction.confidence >= 70 ? 'Moderate Risk' : 'High Uncertainty';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glassmorphism rounded-2xl p-8 h-full relative overflow-hidden group"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br transition-all duration-1000",
          confidenceColor === 'green' ? "from-green-500/20 to-emerald-500/10" :
          confidenceColor === 'yellow' ? "from-yellow-500/20 to-amber-500/10" :
          "from-red-500/20 to-rose-500/10"
        )} />
      </div>

      {/* Header with Enhanced Typography */}
      <div className="flex items-center justify-between mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-3 flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-2 rounded-xl bg-primary/20"
            >
              🎯
            </motion.div>
            <span className="text-gradient">Price Forecast Panel</span>
          </h2>
          <p className="text-lg text-muted-foreground">ETH predictions with pulse, precision, and purpose</p>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleRefresh}
            className={cn(
              "p-3 rounded-xl bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 group/refresh",
              isRefreshing && "animate-spin"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="h-6 w-6 group-hover/refresh:text-primary transition-colors" />
          </motion.button>
          
          <div className="flex bg-secondary/30 rounded-xl p-1.5 backdrop-blur-sm">
            {timeframes.map((tf, index) => (
              <motion.button
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                  selectedTimeframe === tf
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedTimeframe === tf && (
                  <motion.div
                    layoutId="timeframeBackground"
                    className="absolute inset-0 bg-primary rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tf}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Enhanced Price Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="feature-card group/card"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Activity className="h-5 w-5" />
            </div>
            <div className="text-sm text-muted-foreground">Current Price</div>
          </div>
          <motion.div 
            className="text-3xl font-bold"
            key={currentPrice}
            initial={{ scale: 1.1, color: "#10b981" }}
            animate={{ scale: 1, color: "inherit" }}
            transition={{ duration: 0.3 }}
          >
            ${currentPrice.toFixed(2)}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="feature-card group/card"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <div className="text-sm text-muted-foreground">Predicted ({selectedTimeframe})</div>
          </div>
          <div className="flex items-center gap-3">
            <motion.div 
              className="text-3xl font-bold text-green-400"
              key={prediction.price}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              ${prediction.price.toFixed(2)}
            </motion.div>
            <motion.div 
              className={cn(
                "flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full",
                prediction.change >= 0 ? "text-green-400 bg-green-500/20" : "text-red-400 bg-red-500/20"
              )}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            >
              {prediction.change >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {Math.abs(prediction.change).toFixed(2)}%
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="feature-card group/card cursor-pointer"
          whileHover={{ y: -5 }}
          onClick={() => setShowConfidenceDetails(!showConfidenceDetails)}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={cn(
              "p-2 rounded-lg",
              confidenceColor === 'green' ? "bg-green-500/20 text-green-400" :
              confidenceColor === 'yellow' ? "bg-yellow-500/20 text-yellow-400" :
              "bg-red-500/20 text-red-400"
            )}>
              <Eye className="h-5 w-5" />
            </div>
            <div className="text-sm text-muted-foreground">Confidence</div>
          </div>
          <div className="flex items-center gap-4">
            <motion.div 
              className={cn(
                "text-3xl font-bold",
                confidenceColor === 'green' ? "text-green-400" :
                confidenceColor === 'yellow' ? "text-yellow-400" :
                "text-red-400"
              )}
              key={prediction.confidence}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {prediction.confidence}%
            </motion.div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground mb-1">{confidenceLabel}</div>
              <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
                <motion.div
                  className={cn(
                    "h-3 rounded-full transition-all duration-1000",
                    confidenceColor === 'green' ? "bg-green-400" :
                    confidenceColor === 'yellow' ? "bg-yellow-400" :
                    "bg-red-400"
                  )}
                  initial={{ width: 0 }}
                  animate={{ width: `${prediction.confidence}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Chart Area with Confidence Halo */}
      <motion.div 
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="aspect-[16/9] rounded-2xl bg-secondary/20 border border-white/10 p-8 relative overflow-hidden backdrop-blur-sm">
          {/* Animated Confidence Halo Background */}
          <motion.div 
            className={cn(
              "absolute inset-0 opacity-30 rounded-2xl",
              confidenceColor === 'green' ? "bg-green-500/20" :
              confidenceColor === 'yellow' ? "bg-yellow-500/20" :
              "bg-red-500/20"
            )}
            animate={{ 
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          {/* Confidence Halo Rings */}
          <div className="absolute inset-4">
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className={cn(
                  "absolute inset-0 rounded-2xl border-2 opacity-20",
                  confidenceColor === 'green' ? "border-green-400" :
                  confidenceColor === 'yellow' ? "border-yellow-400" :
                  "border-red-400"
                )}
                animate={{ 
                  scale: [1, 1 + ring * 0.05, 1],
                  opacity: [0.2, 0.1, 0.2]
                }}
                transition={{ 
                  duration: 4 + ring, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: ring * 0.5
                }}
              />
            ))}
          </div>
          
          {/* Mock Chart Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mb-6"
            >
              <BarChart3 className="h-32 w-32 text-primary opacity-60" />
            </motion.div>
            <p className="text-xl text-muted-foreground text-center mb-6">
              Interactive price chart with Confidence Halo™ visualization
            </p>
            <div className="flex items-center justify-center gap-6">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">High Confidence</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-4 h-4 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-sm font-medium">Moderate Risk</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-4 h-4 rounded-full bg-red-400 animate-pulse" />
                <span className="text-sm font-medium">High Uncertainty</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Action Buttons */}
      <motion.div 
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button 
          className="flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary/70 rounded-xl transition-all duration-300 group/btn"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Calendar className="h-5 w-5 group-hover/btn:text-primary transition-colors" />
          <span className="font-medium">Backtest 7 Days</span>
        </motion.button>
        <motion.button 
          className="flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary/70 rounded-xl transition-all duration-300 group/btn"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Calendar className="h-5 w-5 group-hover/btn:text-primary transition-colors" />
          <span className="font-medium">Backtest 30 Days</span>
        </motion.button>
        <motion.button 
          className="flex items-center gap-2 px-6 py-3 bg-primary/90 hover:bg-primary text-primary-foreground rounded-xl transition-all duration-300 group/btn shadow-lg shadow-primary/20"
          whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.98 }}
        >
          <Download className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
          <span className="font-medium">Export Data</span>
        </motion.button>
      </motion.div>

      {/* Confidence Details Modal */}
      <AnimatePresence>
        {showConfidenceDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl flex items-center justify-center p-8"
            onClick={() => setShowConfidenceDetails(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glassmorphism rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-4">Confidence Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Model Certainty</span>
                  <span className="font-medium">{prediction.confidence}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Quality</span>
                  <span className="font-medium">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Market Stability</span>
                  <span className="font-medium">78%</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PriceForecastPanel;