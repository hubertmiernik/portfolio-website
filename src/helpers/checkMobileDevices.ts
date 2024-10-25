export const isIos = /iPad|iPhone|iPod/.test(
  navigator.userAgent || navigator.vendor,
);
export const isAndroid = /android/i.test(
  navigator.userAgent || navigator.vendor,
);
export const isMobile = isIos || isAndroid;
