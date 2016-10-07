export const getPointer = (event) => {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
      timeStamp: event.timeStamp || Date.now()
    }
  }

  return {
    x: event.pageX,
    y: event.pageY,
    timeStamp: event.timeStamp || Date.now()
  }
}
