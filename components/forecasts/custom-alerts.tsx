"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Bell, Settings, Trash2, Edit, Smartphone, Mail, MessageSquare, Zap, Activity, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Alert {
  id: string;
  name: string;
  condition: string;
  channel: 'sms' | 'email' | 'discord' | 'push';
  isActive: boolean;
  lastTriggered?: string;
  priority: 'low' | 'medium' | 'high';
}

const CustomAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      name: 'ETH Forecast Confidence > 90%',
      condition: 'Confidence > 90%',
      channel: 'sms',
      isActive: true,
      lastTriggered: '2h ago',
      priority: 'high'
    },
    {
      id: '2',
      name: 'Price deviates 5% from prediction',
      condition: 'Deviation > 5% in 15min',
      channel: 'email',
      isActive: true,
      priority: 'medium'
    },
    {
      id: '3',
      name: 'Anomaly Siren + Red Mood Ring',
      condition: 'Anomaly + Bearish mood',
      channel: 'discord',
      isActive: false,
      lastTriggered: '1d ago',
      priority: 'high'
    },
    {
      id: '4',
      name: 'Edge Block "Liquidity Trap" activates',
      condition: 'Liquidity Trap signal',
      channel: 'push',
      isActive: true,
      priority: 'low'
    }
  ]);

  const [showNewAlert, setShowNewAlert] = useState(false);
  const [newAlert, setNewAlert] = useState({
    name: '',
    condition: '',
    channel: 'email' as const,
    priority: 'medium' as const
  });

  const toggleAlert = (id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, isActive: !alert.isActive } : alert
    ));
  };

  const deleteAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  const createAlert = () => {
    if (newAlert.name && newAlert.condition) {
      const alert: Alert = {
        id: Date.now().toString(),
        ...newAlert,
        isActive: true
      };
      setAlerts(prev => [alert, ...prev]);
      setNewAlert({ name: '', condition: '', channel: 'email', priority: 'medium' });
      setShowNewAlert(false);
    }
  };

  const channelIcons = {
    sms: <Smartphone className="h-4 w-4" />,
    email: <Mail className="h-4 w-4" />,
    discord: <MessageSquare className="h-4 w-4" />,
    push: <Bell className="h-4 w-4" />
  };

  const channelColors = {
    sms: 'text-green-400',
    email: 'text-blue-400',
    discord: 'text-purple-400',
    push: 'text-orange-400'
  };

  const priorityColors = {
    low: 'bg-blue-500/20 text-blue-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    high: 'bg-red-500/20 text-red-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
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
              "linear-gradient(225deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Enhanced Header */}
      <motion.div 
        className="flex items-center justify-between mb-8 relative z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="p-2 rounded-xl bg-primary/20"
            >
              📬
            </motion.div>
            <span className="text-gradient">Custom Alerts System</span>
          </h2>
          <p className="text-muted-foreground">The market doesn't sleep. Neither should your edge.</p>
        </div>
        
        <motion.button
          onClick={() => setShowNewAlert(true)}
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 group"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
          <span className="font-medium">New Alert</span>
        </motion.button>
      </motion.div>

      {/* Alert Statistics */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="glassmorphism rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-green-400 mb-1">
            {alerts.filter(a => a.isActive).length}
          </div>
          <div className="text-sm text-muted-foreground">Active Alerts</div>
        </div>
        <div className="glassmorphism rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {alerts.filter(a => a.lastTriggered).length}
          </div>
          <div className="text-sm text-muted-foreground">Recently Triggered</div>
        </div>
        <div className="glassmorphism rounded-xl p-4 text-center">
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {alerts.filter(a => a.priority === 'high').length}
          </div>
          <div className="text-sm text-muted-foreground">High Priority</div>
        </div>
      </motion.div>

      {/* Enhanced Alert List */}
      <div className="space-y-4 mb-8">
        <AnimatePresence mode="popLayout">
          {alerts.map((alert, index) => (
            <AlertCard
              key={alert.id}
              alert={alert}
              index={index}
              onToggle={() => toggleAlert(alert.id)}
              onDelete={() => deleteAlert(alert.id)}
              channelIcon={channelIcons[alert.channel]}
              channelColor={channelColors[alert.channel]}
              priorityColor={priorityColors[alert.priority]}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Enhanced Alert Settings */}
      <motion.div 
        className="border-t border-white/10 pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/20 text-primary">
            <Settings className="h-6 w-6" />
          </div>
          Alert Settings
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-3">⚙️ Trigger Type</label>
            <select className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Confidence threshold</option>
              <option>Price deviation</option>
              <option>Volume spike</option>
              <option>Mood ring change</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-3">🛎️ Delivery Channel</label>
            <select className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>SMS (urgent only)</option>
              <option>Email with charts</option>
              <option>Discord webhook</option>
              <option>Push notification</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-3">🕰️ Smart Timing</label>
            <select className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>24/7 monitoring</option>
              <option>Trading hours only</option>
              <option>Quiet hours (9PM-7AM)</option>
              <option>Weekly digest</option>
            </select>
          </div>
        </div>
        
        <motion.button 
          className="mt-6 w-full md:w-auto bg-secondary/50 hover:bg-secondary/70 text-foreground px-8 py-3 rounded-xl transition-all duration-300 border border-white/10 font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Save Settings
        </motion.button>
      </motion.div>

      {/* Enhanced New Alert Modal */}
      <AnimatePresence>
        {showNewAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewAlert(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glassmorphism rounded-2xl p-8 max-w-md w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    <Plus className="h-6 w-6" />
                  </div>
                  Create New Alert
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Alert Name</label>
                    <input
                      type="text"
                      placeholder="e.g., High confidence ETH prediction"
                      value={newAlert.name}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Condition</label>
                    <input
                      type="text"
                      placeholder="e.g., Confidence > 85%"
                      value={newAlert.condition}
                      onChange={(e) => setNewAlert(prev => ({ ...prev, condition: e.target.value }))}
                      className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Channel</label>
                      <select 
                        value={newAlert.channel}
                        onChange={(e) => setNewAlert(prev => ({ ...prev, channel: e.target.value as any }))}
                        className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="sms">SMS</option>
                        <option value="email">Email</option>
                        <option value="discord">Discord</option>
                        <option value="push">Push</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Priority</label>
                      <select 
                        value={newAlert.priority}
                        onChange={(e) => setNewAlert(prev => ({ ...prev, priority: e.target.value as any }))}
                        className="w-full bg-secondary/30 border border-white/10 rounded-xl px-4 py-3 transition-all focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <motion.button
                    onClick={() => setShowNewAlert(false)}
                    className="flex-1 bg-secondary/50 hover:bg-secondary/70 text-foreground px-6 py-3 rounded-xl transition-all duration-300 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={createAlert}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-primary/20"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create Alert
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

interface AlertCardProps {
  alert: Alert;
  index: number;
  onToggle: () => void;
  onDelete: () => void;
  channelIcon: React.ReactNode;
  channelColor: string;
  priorityColor: string;
}

const AlertCard = ({ alert, index, onToggle, onDelete, channelIcon, channelColor, priorityColor }: AlertCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ 
      duration: 0.4, 
      delay: index * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 30
    }}
    className={cn(
      "p-6 rounded-xl border transition-all duration-300 group relative overflow-hidden",
      alert.isActive 
        ? "border-primary/30 bg-primary/5 shadow-lg shadow-primary/10" 
        : "border-white/10 bg-secondary/10 opacity-60"
    )}
    whileHover={{ y: -2, scale: 1.02 }}
  >
    {/* Active Indicator */}
    {alert.isActive && (
      <motion.div
        className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    )}

    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <motion.button
            onClick={onToggle}
            className={cn(
              "w-6 h-6 rounded-lg border-2 transition-all duration-300 flex items-center justify-center",
              alert.isActive 
                ? "bg-primary border-primary text-primary-foreground" 
                : "border-muted-foreground hover:border-primary"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {alert.isActive && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <CheckCircle className="h-4 w-4" />
              </motion.div>
            )}
          </motion.button>
          <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
            {alert.name}
          </h4>
          <span className={cn("px-3 py-1 rounded-full text-xs font-medium", priorityColor)}>
            {alert.priority.toUpperCase()}
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground ml-10">
          <span className="font-medium">{alert.condition}</span>
          <div className={cn("flex items-center gap-2", channelColor)}>
            {channelIcon}
            <span className="capitalize font-medium">{alert.channel}</span>
          </div>
          {alert.lastTriggered && (
            <div className="flex items-center gap-1">
              <Activity className="h-4 w-4" />
              <span>Last: {alert.lastTriggered}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <motion.button 
          className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Edit className="h-5 w-5" />
        </motion.button>
        <motion.button
          onClick={onDelete}
          className="p-2 text-muted-foreground hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Trash2 className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

export default CustomAlerts;