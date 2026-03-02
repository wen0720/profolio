const SKILLS = [
  {
    id: 'react',
    name: 'React',
    category: 'FRONTEND',
    level: 80,
    color: '#64bfcc',
    description: '了解 React 渲染邏輯，兼顧效能，建立可複用的元件',
    tags: ['Hooks', 'Context API', 'Redux'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'LANGUAGE',
    level: 60,
    color: '#6b9ec4',
    description: '常見 builtIn type 與基本泛型應用',
    tags: ['Generics', 'Utility Types'],
  },
  {
    id: 'animation',
    name: 'Animation',
    category: 'FRONTEND',
    level: 80,
    color: '#5dba97',
    description: '滾動動態 GSAP - scrollTrigger、web canvas API、3D 模型載入等',
    tags: ['GSAP', 'canvas', 'three.js', 'css'],
  },
  {
    id: 'express',
    name: 'Express',
    category: 'BACKEND',
    level: 50,
    color: '#c49060',
    description: '以 express.js 中間層以達成需求。',
    tags: ['RESTful API'],
  },
] as const;

const SEGMENTS = 22;

function ProficiencyBar({ level, color }: { level: number; color: string }) {
  const filled = Math.round((level / 100) * SEGMENTS);
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-1 gap-0.5">
        {Array.from({ length: SEGMENTS }, (_, i) => (
          <div
            key={i}
            className="h-1.5 flex-1 rounded-[1px]"
            style={{
              backgroundColor:
                i < filled ? `${color}90` : 'rgba(255,255,255,0.07)',
            }}
          />
        ))}
      </div>
      <span
        className="w-8 text-right font-mono text-[11px] tabular-nums"
        style={{
          color,
        }}
      >
        {level}%
      </span>
    </div>
  );
}

function SkillCard({ skill }: { skill: (typeof SKILLS)[number] }) {
  const c = skill.color;

  return (
    <div className="group relative overflow-hidden border border-white/[0.07] bg-black/35 backdrop-blur-sm">
      {/* Accent top line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${c}55 40%, ${c}80 50%, ${c}55 60%, transparent 100%)`,
        }}
      />

      {/* Corner brackets */}
      <div
        className="absolute top-0 left-0 h-4 w-4 border-t border-l"
        style={{ borderColor: `${c}45` }}
      />
      <div
        className="absolute top-0 right-0 h-4 w-4 border-t border-r"
        style={{ borderColor: `${c}45` }}
      />
      <div
        className="absolute bottom-0 left-0 h-4 w-4 border-b border-l"
        style={{ borderColor: `${c}45` }}
      />
      <div
        className="absolute right-0 bottom-0 h-4 w-4 border-r border-b"
        style={{ borderColor: `${c}45` }}
      />

      {/* Hover ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${c}0D 0%, transparent 70%)`,
        }}
      />

      {/* Scan line on hover */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className="absolute top-0 h-full w-px animate-[skill-scan_2.4s_ease-in-out_infinite]"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${c}30 30%, ${c}50 50%, ${c}30 70%, transparent 100%)`,
          }}
        />
      </div>

      <div className="relative p-5 sm:p-6">
        {/* Category + status */}
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[1.8px] text-white/60">
            [{skill.category}]
          </span>
        </div>

        {/* Name */}
        <div className="mb-3 flex items-baseline gap-2.5">
          <h3 className="[font-family:var(--font-display)] text-[1.75rem] font-bold tracking-tight text-white/90 sm:text-[2rem]">
            {skill.name}
          </h3>
        </div>

        {/* Description */}
        <p className="mb-5 text-[13px] leading-relaxed text-white">
          {skill.description}
        </p>

        {/* Proficiency */}
        <div className="mb-5">
          <ProficiencyBar level={skill.level} color={c} />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[2px] border px-2 py-0.5 font-mono text-[10px] tracking-wide transition-colors duration-300 group-hover:border-white/10"
              style={{ borderColor: `${c}22`, color: c }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillSection() {
  return (
    <section className="relative px-6 pt-24 pb-32">
      {/* Section header */}
      <div className="mx-auto mb-14 max-w-4xl">
        <div className="mb-3 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-sky-500">
            SYS://SKILL_MATRIX
          </span>
          <div className="h-px flex-1 bg-linear-to-r from-white/8 to-transparent" />
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-white/88 sm:text-5xl">
          <span className="mr-3 font-mono text-2xl font-normal text-cyan-400/40">
            {'// '}
          </span>
          SKILL
        </h2>

        <div className="mt-4 h-px bg-linear-to-r from-cyan-400/20 via-white/5 to-transparent" />
      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
