const startAnimation = (duration, timingFunction, drawFunction) => {
  let requestId = null;

  const start = performance.now();

  const callback = (time) => {
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) timeFraction = 1;

    const progress = timingFunction(timeFraction);

    drawFunction(progress);

    if (timeFraction < 1) {
      requestId = window.requestAnimationFrame(callback);
    }
  };

  requestId = window.requestAnimationFrame(callback);

  return () => {
    window.cancelAnimationFrame(requestId);
  }
};

export { startAnimation };
