function toggleFullScreen(e: KeyboardEvent) {
  if (e.key === 'f') {
    fullScreenSwitching();
  }
}

export function fullScreenSwitching() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

export default toggleFullScreen;
