"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Calendar, Download, RefreshCw } from 'lucide-react';
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

  const timeframes = ['1H', '4H', '1D', '1W'];

  // Simulate prediction updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrediction(prev => ({
        price: currentPrice + (Math.random() - 0.5) * 100,
        change: (Math.random() - 0.5) * 5,
        confidence: Math.floor(Math.random() * 30) + 70
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPrice]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const confidenceColor = prediction.confidence >= 85 ? 'green' : 
                         prediction.confidence >= 70 ? 'yellow' : 'red';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glassmorphism rounded-2xl p-6 h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">🎯 Price Forecast Panel</h2>
          <p className="text-muted-foreground">ETH predictions with pulse, precision, and purpose</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            className={cn(
              "p-2 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all",
              isRefreshing && "animate-spin"
            )}
          >
            <RefreshCw className="h-5 w-5" />
          </button>
          
          <div className="flex bg-secondary/30 rounded-lg p-1">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setSelectedTimeframe(tf)}
                className={cn(
                  "px-3 py-1 rounded-md text-sm font-medium transition-all",
                  selectedTimeframe === tf
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Current vs Predicted */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glassmorphism rounded-xl p-4">
          <div className="text-sm text-muted-foreground mb-1">Current Price</div>
          <div className="text-2xl font-bold">${currentPrice.toFixed(2)}</div>
        </div>
        
        <div className="glassmorphism rounded-xl p-4">
          <div className="text-sm text-muted-foreground mb-1">Predicted ({selectedTimeframe})</div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-green-400">
              ${prediction.price.toFixed(2)}
            </div>
            <div className={cn(
              "flex items-center gap-1 text-sm font-medium",
              prediction.change >= 0 ? "text-green-400" : "text-red-400"
            )}>
              {prediction.change >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {Math.abs(prediction.change).toFixed(2)}%
            </div>
          </div>
        </div>
        
        <div className="glassmorphism rounded-xl p-4">
          <div className="text-sm text-muted-foreground mb-1">Confidence</div>
          <div className="flex items-center gap-3">
            <div className={cn(
              "text-2xl font-bold",
              confidenceColor === 'green' ? "text-green-400" :
              confidenceColor === 'yellow' ? "text-yellow-400" :
              "text-red-400"
            )}>
              {prediction.confidence}%
            </div>
            <div className="flex-1">
              <div className="w-full bg-secondary/30 rounded-full h-2">
                <div
                  className={cn(
                    "h-2 rounded-full transition-all duration-1000",
                    confidenceColor === 'green' ? "bg-green-400" :
                    confidenceColor === 'yellow' ? "bg-yellow-400" :
                    "bg-red-400"
                  )}
                  style={{ width: `${prediction.confidence}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative mb-6">
        <div className="aspect-[16/9] rounded-xl bg-secondary/20 border border-white/10 p-6 relative overflow-hidden">
          {/* Confidence Halo Background */}
          <div className={cn(
            "absolute inset-0 opacity-20 rounded-xl",
            confidenceColor === 'green' ? "bg-green-500/20" :
            confidenceColor === 'yellow' ? "bg-yellow-500/20" :
            "bg-red-500/20"
          )} />
          
          {/* Mock Chart */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-24 w-24 text-primary mb-4 mx-auto opacity-50" />
              <p className="text-muted-foreground">
                Interactive price chart with Confidence Halo™ visualization
              </p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-sm">High Confidence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="text-sm">Moderate Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-sm">High Uncertainty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
          <Calendar className="h-4 w-4" />
          Backtest 7 Days
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
          <Calendar className="h-4 w-4" />
          Backtest 30 Days
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary/70 rounded-lg transition-colors">
          <Download className="h-4 w-4" />
          Export Data
        </button>
      </div>
    </motion.div>
  );
};

export default PriceForecastPanel;