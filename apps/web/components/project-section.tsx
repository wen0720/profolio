import VideoContent from '@/components/video-content';

const FEATURE_CONFIG = [
  {
    title: '生成標題',
    text: '生成多種標題，包含新聞性、吸引力、SEO 友善等不同取向，提供靈感，協助構思合適標題。',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '生成描述',
    text: '生成描述文字，快速提取文章摘要，由您做最後校驗。',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '生成關鍵字',
    text: '分析文章內容，抽取重要字詞，想關鍵字不再卡卡！',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '配圖推薦',
    text: '依據文章搜尋合適的配圖，讓找圖不再成為工作負擔。',
    videoSrc: '',
    mbVideoSrc: '',
  },
  {
    title: '相關報導',
    text: '搜尋過往報導，延伸相關報導更簡單。',
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
