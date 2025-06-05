"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { LineChart, TrendingUp, Activity, Waves, Gauge, Wallet, DollarSign } from 'lucide-react';

const FeatureEngineering = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Price Lag Features",
      description: "Yesterday's close, last week's high, historical patterns",
      color: "blue",
      code: "// Price lag feature calculation\nconst lagFeatures = prices.map((price, i) => ({\n  prev_day: prices[i - 1]?.close || price.close,\n  prev_week: prices[i - 7]?.high || price.high,\n}));"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Derivative Metrics",
      description: "Rate of change, moving averages, volatility envelopes",
      color: "green",
      code: "// Calculate rate of change\nconst roc = prices.map((price, i) => {\n  const prev = prices[i - 1]?.close;\n  return prev ? (price.close - prev) / prev : 0;\n});"
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Technical Indicators",
      description: "RSI, MACD, Bollinger Bands with custom parameters",
      color: "purple",
      code: "// RSI calculation\nconst rsi = calculateRSI(prices, {\n  period: 14,\n  smoothing: 2,\n  source: 'close'\n});"
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Volume Profiles",
      description: "Volume-weighted metrics and liquidity analysis",
      color: "pink",
      code: "// Volume profile analysis\nconst vwap = prices.map((bar, i) => ({\n  vwap: (bar.high + bar.low + bar.close) / 3 * bar.volume,\n  cumulative: calculateCumulativeVolume(prices.slice(0, i + 1))\n}));"
    },
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "Market Regime",
      description: "Volatility states and trend detection",
      color: "amber",
      code: "// Market regime detection\nconst regime = detectRegime({\n  volatility: calculateVolatility(prices),\n  trend: detectTrend(prices),\n  volume: analyzeVolume(prices)\n});"
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "On-Chain Metrics",
      description: "Wallet flows, gas dynamics, contract interactions",
      color: "cyan",
      code: "// On-chain metric processing\nconst onChainMetrics = async () => {\n  const gasPrice = await getGasPrice();\n  const walletFlow = await getWalletFlow();\n  return processMetrics({ gasPrice, walletFlow });\n};"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Funding Rates",
      description: "Perpetual swap funding and basis analysis",
      color: "red",
      code: "// Funding rate analysis\nconst fundingMetrics = exchanges.map(ex => ({\n  rate: ex.getFundingRate(),\n  basis: calculateBasis(ex.spot, ex.perp),\n  skew: analyzeSkew(ex.longs, ex.shorts)\n}));"
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
            2. Feature Engineering:{' '}
            <span className="text-gradient">
              The Secret Sauce of Signals
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Here lies the soul of EtherEdge: its ability to craft meaning from noise.
            Watch as raw market data transforms into powerful predictive signals.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  className={cn(
                    "w-full feature-card flex items-start gap-4 text-left",
                    activeFeature === index && "border-primary/50 bg-primary/5"
                  )}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={cn(
                    "p-3 rounded-lg",
                    `bg-${feature.color}-500/20 text-${feature.color}-400`
                  )}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glassmorphism rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Code Preview</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <pre className="bg-secondary/30 rounded-lg p-4 overflow-x-auto">
                <code className="text-sm font-mono text-foreground/90">
                  {features[activeFeature].code}
                </code>
              </pre>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glassmorphism rounded-xl p-8"
          >
            <h4 className="text-xl font-semibold mb-4">Edge Blocks: Build Your Own Signal Stack</h4>
            <p className="text-lg text-muted-foreground mb-6">
              Edge Blocks aren't just features—they're strategic insights, turned into 
              model-ready input vectors. Think of this like crafting your own tactical 
              radar—what you focus on shapes how you act.
            </p>
            <button className="bg-primary/90 hover:bg-primary text-primary-foreground px-6 py-3 rounded-lg transition-colors font-medium">
              Try Edge Blocks Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureEngineering;