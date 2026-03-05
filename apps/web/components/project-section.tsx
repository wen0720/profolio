import VideoContent from '@/components/video-content';

const FEATURE_CONFIG = [
  {
    title: '',
    text: '',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '',
    text: '',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '',
    text: '',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '',
    text: '',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '',
    text: '',
    videoSrc: '',
    mbVideoSrc: '',
  },
];

export default function FeatureSection1() {
  return (
    <section className="relative mt-24 mb-32 px-6">
      <div className="container">
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
            PROJECT
          </h2>
        </div>
        {/* 內容 */}
        <VideoContent config={FEATURE_CONFIG} />
      </div>
    </section>
  );
}
