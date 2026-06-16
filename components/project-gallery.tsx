'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-4 my-8">
      <h2 className="text-xl font-bold flex items-center gap-2 border-b border-border/40 pb-2">
        <span>Project Screenshots</span>
        <span className="text-xs font-normal text-muted-foreground px-2 py-0.5 bg-secondary rounded-full">
          {images.length} images
        </span>
      </h2>

      {/* Main Showcase Image */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/80 bg-muted/30 shadow-md group">
        <Image
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          className="object-contain duration-300"
          priority
        />
        
        {/* Navigation Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground shadow-md transition-all opacity-0 group-hover:opacity-100 hover:scale-105 z-10 cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-foreground shadow-md transition-all opacity-0 group-hover:opacity-100 hover:scale-105 z-10 cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Lightbox / Zoom Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="absolute right-4 bottom-4 p-2 rounded-lg bg-background/80 hover:bg-background text-foreground shadow-md transition-all opacity-0 group-hover:opacity-100 hover:scale-105 z-10 cursor-pointer flex items-center gap-1.5 text-xs font-medium">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Zoom</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden bg-black/95 border-none flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={images[activeIndex]}
                alt={`${title} screenshot ${activeIndex + 1} magnified`}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
              
              {/* Internal controls inside Lightbox */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/10 transition-all hover:scale-105 z-50 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/10 transition-all hover:scale-105 z-50 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/60 text-white/90 text-sm font-medium border border-white/10">
                {activeIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Thumbnails Row */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar scroll-smooth">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-24 aspect-video flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer hover:opacity-100 ${
              idx === activeIndex
                ? 'border-primary opacity-100 scale-95 shadow-sm'
                : 'border-transparent opacity-60 hover:border-border'
            }`}
          >
            <Image
              src={img}
              alt={`${title} thumbnail ${idx + 1}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
