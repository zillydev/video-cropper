export const getCurrentSegmentFromCuts = (currentTime, videoLength, cuts) => {
  var left = 0;
  var right = videoLength;
  for (var cut of cuts) {
      if (cut.time < currentTime) {
          left = Math.max(left, cut.time);
      } else {
          right = Math.min(right, cut.time);
      }
  };

  // dispatch(setCurrentSegment({ start: left, end: right }));
  return { start: left, end: right };
}