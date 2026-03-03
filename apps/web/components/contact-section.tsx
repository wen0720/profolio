import { SiGithub, SiMedium } from 'react-icons/si';
import { Globe } from 'lucide-react';

const LINKS = [
  {
    name: 'GitHub',
    icon: SiGithub,
    color: '#E6EDF3',
    url: 'https://github.com/wen0720',
    description: '',
  },
  {
    name: 'Medium',
    icon: SiMedium,
    color: '#FFFFFF',
    url: 'https://medium.com/@faition2',
    description: '',
  },
  {
    name: 'Blog',
    icon: Globe,
    color: '#64bfcc',
    url: 'https://blog.papersuniverse.com/',
    description: '',
  },
] as const;

function LinkCard({ link }: { link: (typeof LINKS)[number] }) {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-5 overflow-hidden border
        border-white/[0.07] bg-black/35 p-5 backdrop-blur-sm transition-colors
        duration-300 hover:border-white/15 sm:p-6"
    >
      {/* Accent top line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${link.color}55 40%, ${link.color}80 50%, ${link.color}55 60%, transparent 100%)`,
        }}
      />

      {/* Corner brackets */}
      <div
        className="absolute top-0 left-0 h-3 w-3 border-t border-l border-white/10
          transition-colors duration-300 group-hover:border-white/25"
      />
      <div
        className="absolute top-0 right-0 h-3 w-3 border-t border-r border-white/10
          transition-colors duration-300 group-hover:border-white/25"
      />
      <div
        className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/10
          transition-colors duration-300 group-hover:border-white/25"
      />
      <div
        className="absolute right-0 bottom-0 h-3 w-3 border-r border-b border-white/10
          transition-colors duration-300 group-hover:border-white/25"
      />

      {/* Hover ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity
          duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${link.color}12 0%, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <div className="relative shrink-0">
        <Icon
          className="text-3xl text-white/50 transition-colors duration-300
            group-hover:text-[var(--link-color)] sm:text-4xl"
          style={{ '--link-color': link.color } as React.CSSProperties}
        />
      </div>

      {/* Text */}
      <div className="relative min-w-0 flex-1">
        <h3 className="font-mono text-sm font-bold tracking-wide text-white/90">
          {link.name}
        </h3>
        <p
          className="mt-1 text-xs leading-relaxed text-white/40 transition-colors
            duration-300 group-hover:text-white/60"
        >
          {link.description}
        </p>
      </div>

      {/* Arrow */}
      <span
        className="relative font-mono text-sm text-white/20 transition-all duration-300
          group-hover:translate-x-1 group-hover:text-white/50"
      >
        →
      </span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <section className="relative mt-24 mb-32 px-6">
      {/* Section header */}
      <div className="mx-auto mb-14 max-w-4xl">
        <div className="mb-3 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-sky-500">
            Topic://
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-white/8 to-transparent" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-white/88 sm:text-5xl">
          <span className="mr-3 font-mono text-2xl font-normal text-cyan-400/40">
            {'// '}
          </span>
          CONTACT
        </h2>
        <div
          className="mt-4 h-px bg-linear-to-r from-cyan-400/20 via-white/5 to-transparent"
        />
      </div>

      {/* Links */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
        {LINKS.map((link) => (
          <LinkCard key={link.name} link={link} />
        ))}
      </div>
    </section>
  );
}
