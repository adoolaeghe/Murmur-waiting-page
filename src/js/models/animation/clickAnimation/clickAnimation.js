function handleCircleReducer(wrapperIndex,
                            circleIndex,
                            onIndex,
                            playIndex,
                            timerIndex,
                            backgroundIndex,
                            smallCircleIndex,
                            largeCircleIndex) {
  document.getElementsByClassName(largeCircleIndex)["0"].classList.remove('CircleEnlarger');
  document.getElementsByClassName(largeCircleIndex)["0"].classList.add('CircleReducer');
  document.getElementsByClassName(smallCircleIndex)["0"].classList.add('smallCircleReducer');
  document.getElementsByClassName(smallCircleIndex)["0"].classList.remove('smallCircleEnlarger');
  document.getElementsByClassName(backgroundIndex)["0"].classList.add('activeBackground');

  setTimeout(function(nb){
    document.getElementsByClassName(circleIndex)["0"].style.zIndex = "-1";
    document.getElementsByClassName(wrapperIndex)["0"].style.zIndex = "1";
    document.getElementsByClassName(onIndex)["0"].style.zIndex = "100";
    document.getElementsByClassName(playIndex)["0"].style.zIndex = "2";
    document.getElementsByClassName(timerIndex)["0"].style.display = "block";
  }, 1000);
}

function handleCircleEnlarger(wrapperIndex,
                              circleIndex,
                              onIndex,
                              playIndex,
                              timerIndex,
                              backgroundIndex,
                              smallCircleIndex,
                              largeCircleIndex) {
  document.getElementsByClassName(smallCircleIndex)["0"].classList.remove('CircleReducer');
  document.getElementsByClassName(largeCircleIndex)["0"].classList.add('CircleEnlarger');
  document.getElementsByClassName(smallCircleIndex)["0"].classList.add('smallCircleEnlarger');
  document.getElementsByClassName(largeCircleIndex)["0"].classList.remove('smallCircleReducer');
  document.getElementsByClassName(circleIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(circleIndex)["0"].style.display = "block";
  document.getElementsByClassName(wrapperIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(onIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(playIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(timerIndex)["0"].style.display = "none";
  document.getElementsByClassName(backgroundIndex)["0"].classList.remove('activeBackground');
}
