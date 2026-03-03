'use client';

import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { cn } from '@workspace/ui/lib/utils';
import dynamic from 'next/dynamic';

const VideoWrapper = dynamic(() => import('@/components/video-wrapper'), {
  ssr: false,
});

interface VideoContentProps {
  config: {
    title: string;
    text: string;
    videoSrc: string;
    mbVideoSrc: string;
  }[];
}

export default function VideoContent({ config }: VideoContentProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoTransformRef = useRef<HTMLDivElement>(null);
  const matches = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (!matches) {
      videoTransformRef.current?.style.setProperty('transform', 'translateY(0)');
    }
  }, [matches]);

  if (!config[activeIndex]) {
    return null;
  }

  const onClick = (e: React.MouseEvent, index: number) => {
    const li = e.currentTarget as HTMLElement;
    const ul = li.parentElement as HTMLElement;
    const halfLiHeight = parseInt(window.getComputedStyle(li).height) / 2;
    const videoHeight = parseInt(window.getComputedStyle(videoRef.current!).height);
    const halfVideoHeight = videoHeight / 2;
    const ulHeight = parseInt(window.getComputedStyle(ul).height);
    const maxTransfrom = ulHeight - videoHeight;

    const ulOffsetTop = ul.offsetTop;
    const liOffsetTop = li.offsetTop;

    const diff = liOffsetTop - ulOffsetTop;
    const transfromY = Math.min(
      // index * 20 是為了讓每個項目都還是有些微變動
      Math.max(0 + index * 20, diff - halfVideoHeight + halfLiHeight),
      // (config.length - 1 - index) * 20 是為了讓每個項目都還是有些微變動
      maxTransfrom - (config.length - 1 - index) * 20,
    );

    if (matches) {
      videoTransformRef.current?.style.setProperty(
        'transform',
        `translateY(${transfromY}px)`,
      );
    } else {
      if (e.type === 'click') {
        li.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }
    setActiveIndex(index);
  };

  const onScroll = (e: React.SyntheticEvent) => {
    const containerEl = e.currentTarget;
    const containerWidth = containerEl.clientWidth;
    const scrollLeft = containerEl.scrollLeft;
    const items = containerEl.children;

    let index = 0;
    let currentIndex = activeIndex;

    // 使用 while 迴圈，找到第一個可見比例 >= 0.5 的項目
    while (index < items.length) {
      const el = items[index] as HTMLElement;
      const itemLeft = el.offsetLeft;
      const itemWidth = parseInt(window.getComputedStyle(el).width);
      const itemRight = itemLeft + itemWidth;

      // 計算與可視區域的重疊部分
      const visibleLeft = Math.max(itemLeft, scrollLeft);
      const visibleRight = Math.min(itemRight, scrollLeft + containerWidth);
      const visibleWidth = Math.max(0, visibleRight - visibleLeft);

      // 計算可見比例
      const visibleRatio = visibleWidth / itemWidth;

      // 如果可見比例 >= 0.5，設為 active 並停止搜尋
      if (visibleRatio >= 0.5) {
        currentIndex = index;
        break;
      }

      index++;
    }

    // 只有當索引真的改變時才更新狀態
    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  };

  return (
    <div className="mt-[30px] flex flex-col lg:flex-row">
      {/* 影音項目 */}
      <ul
        className="scroll-x-wrapper scrollbar-none order-2 flex w-full shrink-0
          space-x-[20px] lg:order-1 lg:mr-[60px] lg:block lg:max-w-[500px]
          lg:space-y-[20px] lg:space-x-0"
        onScroll={onScroll}
      >
        {config.map((config, index) => (
          <li
            key={index}
            className={cn(
              `w-full max-w-[75vw] shrink-0 cursor-pointer snap-center snap-always
              rounded-lg border border-[#ddd] p-[20px] transition hover:bg-[#eee]
              lg:max-w-[initial]`,
              activeIndex === index && 'bg-[#ccc] hover:bg-[#ccc]',
            )}
            onClick={(e) => onClick(e, index)}
          >
            <p className="mb-[5px] text-[18px] font-bold md:text-[20px]">
              {config.title}
            </p>
            <p className="text-gray-700">{config.text}</p>
          </li>
        ))}
      </ul>
      <div className="order-1 mb-[30px] shrink grow lg:order-2 lg:mb-0">
        <div ref={videoTransformRef} className="transition">
          <VideoWrapper
            key={activeIndex}
            className="mx-auto aspect-[864/866] max-w-[500px] overflow-hidden rounded-3xl
              lg:aspect-[1080/602] lg:max-w-[initial]"
            ref={videoRef}
            pcSrc={config[activeIndex].videoSrc}
            mbSrc={config[activeIndex].mbVideoSrc}
          />
        </div>
      </div>
    </div>
  );
}
