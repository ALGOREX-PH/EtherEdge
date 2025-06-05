"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Copy, Check, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const CodePreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeTab, setActiveTab] = useState('data');
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: 'data', name: 'Data Ingestion' },
    { id: 'preprocessing', name: 'Preprocessing' },
    { id: 'model', name: 'Model Fit' },
    { id: 'prediction', name: 'Prediction' }
  ];

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExamples: Record<string, string> = {
    data: `# Data ingestion pipeline
import pandas as pd
import numpy as np
from typing import List, Dict

def fetch_market_data(
    symbol: str,
    timeframe: str,
    limit: int = 1000
) -> pd.DataFrame:
    """
    Fetch OHLCV data from multiple exchanges
    and combine into a clean DataFrame
    """
    # Implementation details
    pass

def process_onchain_data(
    address: str,
    metrics: List[str]
) -> Dict[str, float]:
    """
    Process on-chain metrics like gas usage,
    wallet activity, etc.
    """
    # Implementation details
    pass`,
    preprocessing: `# Feature engineering and preprocessing
from sklearn.preprocessing import StandardScaler
import ta  # Technical Analysis library

def engineer_features(df: pd.DataFrame) -> pd.DataFrame:
    """
    Create technical indicators and derivative features
    """
    # Add momentum indicators
    df['rsi'] = ta.momentum.RSIIndicator(
        df['close'], window=14
    ).rsi()
    
    # Add trend features
    df['sma_20'] = ta.trend.SMAIndicator(
        df['close'], window=20
    ).sma_indicator()
    
    # Add volatility features
    df['bb_high'] = ta.volatility.BollingerBands(
        df['close']
    ).bollinger_hband()
    
    return df`,
    model: `# Model fitting with transparency
from sklearn.linear_model import Ridge
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

class EdgeModel:
    def __init__(self):
        self.model = Ridge(alpha=1.0)
        self.feature_importance = {}
    
    def fit(
        self,
        X: np.ndarray,
        y: np.ndarray,
        feature_names: List[str]
    ):
        """
        Fit model and store feature importance
        """
        self.model.fit(X, y)
        
        # Store coefficients for interpretability
        self.feature_importance = dict(zip(
            feature_names,
            np.abs(self.model.coef_)
        ))`,
    prediction: `# Prediction with confidence bands
def predict_with_confidence(
    model: EdgeModel,
    X: np.ndarray,
    confidence: float = 0.95
) -> Dict[str, float]:
    """
    Generate predictions with confidence intervals
    """
    # Point prediction
    y_pred = model.predict(X)
    
    # Calculate confidence bands
    std_err = np.std(
        y_pred - y_true
    ) * np.sqrt(1 + 1/len(y_true))
    
    z_score = stats.norm.ppf(
        (1 + confidence) / 2
    )
    
    return {
        'prediction': y_pred,
        'lower_bound': y_pred - z_score * std_err,
        'upper_bound': y_pred + z_score * std_err,
        'confidence': confidence
    }`
  };

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
            Code Preview:{' '}
            <span className="text-gradient">
              The Blueprint for the Bold
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            For devs, quants, tinkerers, and believers in open-source innovation—this 
            is your key. We don't just sell forecasts. We offer foundations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="glassmorphism rounded-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {tabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={cn(
                            "px-4 py-1 text-sm transition-colors",
                            activeTab === tab.id
                              ? "text-primary"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={copyCode}
                      className="p-1.5 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      {copied ? (
                        <Check className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
                <pre className="p-4 overflow-x-auto">
                  <code className="text-sm font-mono">
                    {codeExamples[activeTab]}
                  </code>
                </pre>
              </div>
            </div>

            <div className="space-y-6">
              <div className="feature-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">Get Started</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Fork the repository and start building your own edge with our 
                  battle-tested codebase.
                </p>
                <button className="w-full bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <Github className="h-5 w-5" />
                  Fork on GitHub
                </button>
              </div>

              <div className="glassmorphism rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <div className="space-y-3">
                  <Resource
                    title="Documentation"
                    description="Full API reference and guides"
                  />
                  <Resource
                    title="Example Notebooks"
                    description="Ready-to-run Jupyter notebooks"
                  />
                  <Resource
                    title="Community Forum"
                    description="Get help and share insights"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ResourceProps {
  title: string;
  description: string;
}

const Resource = ({ title, description }: ResourceProps) => (
  <a
    href="#"
    className="block p-3 rounded-lg hover:bg-secondary/30 transition-colors"
  >
    <h5 className="font-medium">{title}</h5>
    <p className="text-sm text-muted-foreground">{description}</p>
  </a>
);

export default CodePreview;