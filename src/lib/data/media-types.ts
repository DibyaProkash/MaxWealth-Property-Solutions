
import type { LucideIcon } from 'lucide-react';
import { Newspaper, Video, BookText, Clapperboard } from 'lucide-react';

export type MediaType = 'Blog' | 'Vlog' | 'Video' | 'Reel' | 'Article';

export const mediaTypeIcons: Record<MediaType, LucideIcon> = {
  'Blog': BookText,
  'Vlog': Clapperboard,
  'Video': Video,
  'Reel': Clapperboard,
  'Article': Newspaper,
};
