'use client';

import { useState, useEffect } from 'react';
import type { RefObject } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { cn } from '@workspace/ui/lib/utils';

interface VideoWithPlaceholderProps {
  pcSrc: string;
  mbSrc: string;
  ref: RefObject<HTMLVideoElement | null>;
  className: string;
  style?: React.CSSProperties;
}

export default function VideoWithPlaceholder({
  pcSrc,
  mbSrc,
  ref,
  className,
  style,
}: VideoWithPlaceholderProps) {
  const [isPlayig, setIsPlayig] = useState(false);
  const [isError, setIsError] = useState(false);
  const min992Matches = useMediaQuery('(min-width: 992px)');

  const videoSrc = min992Matches ? pcSrc : mbSrc;

  useEffect(() => {
    const currentVideo = ref.current;
    if (!currentVideo) {
      return;
    }
    if (currentVideo.paused) {
      currentVideo.play().catch(() => {
        console.error('play wrong');
      });
    }
  }, [ref, videoSrc]);

  return (
    <div style={style} className={cn('relative', className)}>
      {!isPlayig && (
        <div className="skeleton-shimmer absolute h-full w-full bg-gray-200"></div>
      )}
      {isError && <div className="absolute h-full w-full bg-pink-500">影片載入失敗</div>}
      {videoSrc && (
        <video
          ref={ref}
          preload="auto"
          loop
          muted
          playsInline
          onPlaying={() => setIsPlayig(true)}
          onError={() => setIsError(true)}
          src={videoSrc}
        ></video>
      )}
    </div>
  );
}
