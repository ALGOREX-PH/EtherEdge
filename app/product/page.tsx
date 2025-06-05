"use client";

import { motion } from 'framer-motion';
import ProductHero from '@/components/sections/product/hero';
import DataCollection from '@/components/sections/product/data-collection';
import FeatureEngineering from '@/components/sections/product/feature-engineering';
import Modeling from '@/components/sections/product/modeling';
import Interpretability from '@/components/sections/product/interpretability';
import Results from '@/components/sections/product/results';
import EdgeBlocks from '@/components/sections/product/edge-blocks';
import MoodRing from '@/components/sections/product/mood-ring';
import InstantResults from '@/components/sections/product/instant-results';
import CodePreview from '@/components/sections/product/code-preview';
import Finale from '@/components/sections/product/finale';

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProductHero />
      <DataCollection />
      <FeatureEngineering />
      <Modeling />
      <Interpretability />
      <Results />
      <EdgeBlocks />
      <MoodRing />
      <InstantResults />
      <CodePreview />
      <Finale />
    </div>
  );
}