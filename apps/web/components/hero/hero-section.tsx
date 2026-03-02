'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@workspace/ui/lib/utils';
import { ParticleScene } from './particle-scene';

function GlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={cn('relative inline-block', className)}>
      {text}
      <span
        aria-hidden
        className="absolute top-0 left-0 -z-10 w-full animate-[glitch-1_5s_infinite_linear_alternate-reverse] text-[rgba(0,200,220,0.6)]"
      >
        {text}
      </span>
      <span
        aria-hidden
        className="absolute top-0 left-0 -z-20 w-full animate-[glitch-2_4s_infinite_linear_alternate-reverse] text-[rgba(180,140,200,0.4)]"
      >
        {text}
      </span>
    </span>
  );
}

function TypewriterTagline({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(cursor);
  }, []);

  return (
    <span className="text-sm tracking-[0.15em] text-slate-400 sm:text-base md:text-lg">
      {displayed}
      <span
        className={cn(
          'ml-0.5 inline-block h-[1em] w-0.5 bg-slate-500 align-middle transition-opacity duration-100',
          showCursor ? 'opacity-100' : 'opacity-0',
        )}
      />
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      {/* Scanlines — very subtle */}
      <div
        className="pointer-events-none absolute inset-0 z-3 animate-[scanline-drift_12s_linear_infinite]"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.03) 3px, rgba(0,0,0,0.03) 6px)',
        }}
      />

      {/* Three.js scene */}
      <ParticleScene />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6">
        {/* Status badge */}
        <div
          className={cn(
            'mb-8 flex items-center gap-2.5 rounded-full border border-white/6 bg-white/3 px-4 py-1.5 opacity-0 backdrop-blur-sm',
            'animate-[fade-up_0.8s_ease-out_0.2s_forwards]',
          )}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-[soft-ping_3s_ease-in-out_infinite] rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/40">
            開放合作中
          </span>
        </div>

        {/* Avatar with refined glow */}
        <div
          className={cn(
            'relative mb-10 opacity-0',
            'animate-[fade-up_0.8s_ease-out_0.5s_forwards]',
          )}
        >
          {/* Soft ambient glow behind avatar */}
          <div
            className="absolute -inset-6 -z-10 animate-[glow-breathe_4s_ease-in-out_infinite] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(0,180,210,0.1) 0%, rgba(0,180,210,0.03) 50%, transparent 70%)',
            }}
          />

          {/* Subtle border ring */}
          <div className="relative rounded-full bg-linear-to-b from-white/15 via-white/5 to-white/10 p-px">
            <div className="relative h-32 w-32 overflow-hidden rounded-full sm:h-40 sm:w-40">
              <Image
                src="/avatar.jpg"
                alt="個人照片"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle top-light reflection */}
              <div className="absolute inset-0 bg-linear-to-b from-white/6 via-transparent to-black/20" />
            </div>
          </div>

          {/* Corner brackets — thinner, with subtle breathe */}
          <div className="absolute -top-3.5 -left-3.5 h-5 w-5 animate-[glow-breathe_4s_ease-in-out_infinite] border-t border-l border-white/12" />
          <div className="absolute -top-3.5 -right-3.5 h-5 w-5 animate-[glow-breathe_4s_ease-in-out_infinite_0.5s] border-t border-r border-white/12" />
          <div className="absolute -bottom-3.5 -left-3.5 h-5 w-5 animate-[glow-breathe_4s_ease-in-out_infinite_1s] border-b border-l border-white/12" />
          <div className="absolute -right-3.5 -bottom-3.5 h-5 w-5 animate-[glow-breathe_4s_ease-in-out_infinite_1.5s] border-r border-b border-white/12" />
        </div>

        {/* Name */}
        <h1
          className={cn(
            'mb-3 text-center opacity-0',
            'animate-[fade-up_0.8s_ease-out_0.8s_forwards]',
          )}
        >
          <GlitchText
            text="Tim Chen"
            className="text-[1.8rem] font-bold tracking-[0.04em] text-white/95 sm:text-[2.15rem] md:text-[2.4rem]"
          />
        </h1>

        {/* Title */}
        <div
          className={cn(
            'mb-7 flex items-center gap-3 opacity-0',
            'animate-[fade-up_0.8s_ease-out_1.1s_forwards]',
          )}
        >
          <span className="h-px w-10 bg-linear-to-r from-transparent to-white/15" />
          <span className="[font-family:var(--font-display)] text-xs font-normal tracking-[0.25em] text-white/35 sm:text-sm">
            前端工程師
          </span>
          <span className="h-px w-10 bg-linear-to-l from-transparent to-white/15" />
        </div>

        {/* Tagline */}
        <div
          className={cn(
            'opacity-0',
            'animate-[fade-up_0.8s_ease-out_1.6s_forwards]',
          )}
        >
          <TypewriterTagline text="Make it work first." />
        </div>

        {/* Scroll indicator */}
        <div
          className={cn(
            'absolute bottom-10 flex flex-col items-center gap-2 opacity-0',
            'animate-[fade-up_0.8s_ease-out_2.2s_forwards]',
          )}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/20">
            SCROLL
          </span>
          <div className="h-8 w-px origin-top animate-[scroll-pulse_2.5s_ease-in-out_infinite] bg-linear-to-b from-white/25 to-transparent" />
        </div>
      </div>
    </section>
  );
}
