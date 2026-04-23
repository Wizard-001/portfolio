import React from 'react';
import { cn } from "@/lib/utils";

interface GlowingEffectWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const GlowingEffectWrapper = ({ 
  children, 
  className,
  containerClassName 
}: GlowingEffectWrapperProps) => {
  return (
    <div className={cn("relative flex items-center justify-center w-full", containerClassName)}>
      <div id="poda" className="relative flex items-center justify-center group w-full">
        {/* Refined Aura: Single high-end breathing gradient */}
        <div className="absolute z-[-1] overflow-hidden h-[calc(100%+6px)] w-[calc(100%+6px)] rounded-xl blur-[8px] opacity-70
                        before:absolute before:content-[''] before:z-[-2] before:w-[300%] before:h-[300%] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-spin-slow
                        before:bg-[conic-gradient(from_0deg,#000,#3b82f6_15%,#000_40%,#000_60%,#8b5cf6_85%,#000_100%)]">
        </div>
        
        {/* Subtle Inner Volumetric Glow */}
        <div className="absolute z-[-1] overflow-hidden h-full w-full rounded-xl blur-[2px] opacity-40
                        before:absolute before:content-[''] before:z-[-2] before:w-[200%] before:h-[200%] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-spin-slow
                        before:bg-[conic-gradient(from_180deg,transparent,#60a5fa33,transparent_30%,transparent_70%,#a78bfa33,transparent)]"
                        style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
        </div>

        <div className={cn("relative w-full overflow-hidden rounded-lg", className)}>
          {children}
          
          {/* Subtle Spin Effect */}
          <div className="absolute h-full w-full overflow-hidden top-0 right-0 rounded-lg pointer-events-none opacity-20
                          before:absolute before:content-[''] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90
                          before:bg-[conic-gradient(rgba(0,0,0,0),#3d3a4f,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,#3d3a4f,rgba(0,0,0,0)_100%)]
                          before:brightness-135 before:animate-spin-slow">
          </div>
        </div>
      </div>
    </div>
  );
};
