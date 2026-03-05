import {
  SiEslint,
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiPostcss,
  SiDocker,
  SiVitest,
  SiNginx,
  SiThreedotjs,
  SiVuedotjs,
} from 'react-icons/si';

const TOOLS = [
  { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'ESLint', icon: SiEslint, color: '#4B32C3' },
  { name: 'PostCSS', icon: SiPostcss, color: '#DD3A0A' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#FFFFFF' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'NGINX', icon: SiNginx, color: '#009639' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Vitest', icon: SiVitest, color: '#6E9F18' },
] as const;

function ToolCard({ tool }: { tool: (typeof TOOLS)[number] }) {
  const Icon = tool.icon;

  return (
    <div
      className="group relative flex aspect-square flex-col items-center justify-center
        overflow-hidden border border-white/[0.07] bg-black/70"
      style={{ '--tool-color': tool.color } as React.CSSProperties}
    >
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
          background: `radial-gradient(circle at 50% 50%, ${tool.color}15 0%, transparent 70%)`,
        }}
      />

      {/* Icon — dim white by default, brand color on hover */}
      <Icon
        className="text-3xl text-white/50 transition-colors duration-300
          group-hover:text-[var(--tool-color)] sm:text-4xl"
      />

      {/* Name */}
      <span
        className="mt-3 font-mono text-xs tracking-wider text-white/50 transition-colors
          duration-300 group-hover:text-white/70"
      >
        {tool.name}
      </span>
    </div>
  );
}

export default function ExperienceSection() {
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
          EXPERIENCE
        </h2>
        <div
          className="mt-4 h-px bg-linear-to-r from-cyan-400/20 via-white/5 to-transparent"
        />
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-5">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
}
