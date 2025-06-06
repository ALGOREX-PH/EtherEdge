"use client";

import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface SearchFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Array<{ id: string; name: string; count: number }>;
}

const SearchFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}: SearchFilterProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-2xl p-8 mb-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-5">
            <Search className="h-32 w-32 text-primary" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              {/* Search Input */}
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Search features, capabilities, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-secondary/30 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-lg placeholder:text-muted-foreground/70"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              
              {/* Advanced Filter Toggle */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className={cn(
                  "px-6 py-4 rounded-xl font-medium transition-all flex items-center gap-2",
                  showAdvanced
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70"
                )}
              >
                <SlidersHorizontal className="h-5 w-5" />
                Advanced
              </button>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all relative overflow-hidden",
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">
                    {category.name} ({category.count})
                  </span>
                  {selectedCategory === category.id && (
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-xl"
                      layoutId="categoryBackground"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Advanced Filters */}
            {showAdvanced && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-white/10"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Popularity</label>
                    <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2">
                      <option>All</option>
                      <option>90%+</option>
                      <option>80%+</option>
                      <option>70%+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Demo Available</label>
                    <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2">
                      <option>All</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Release Status</label>
                    <select className="w-full bg-secondary/30 border border-white/10 rounded-lg px-3 py-2">
                      <option>All</option>
                      <option>New</option>
                      <option>Stable</option>
                      <option>Beta</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchFilter;