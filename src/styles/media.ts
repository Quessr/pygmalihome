export type DeviceType = 'tablet' | 'laptop' | 'desktop' | 'desktopL';

export const breakpoints: Record<DeviceType, number> = {
  tablet: 640,
  laptop: 1024,
  desktop: 1440,
  desktopL: 1920,
};
