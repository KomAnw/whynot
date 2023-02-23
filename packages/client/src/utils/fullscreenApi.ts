function toggleFullScreen(e: KeyboardEvent) {
  if (e.key === 'f') {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

export default toggleFullScreen;
