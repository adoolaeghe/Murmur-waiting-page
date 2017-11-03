function handleCircleReducer(wrapperIndex,
                            circleIndex,
                            onIndex,
                            playIndex,
                            timerIndex,
                            smallCircleIndex,
                            largeCircleIndex) {
                              console.log(largeCircleIndex)
  console.log(document.getElementsByClassName(largeCircleIndex))
  document.getElementsByClassName(largeCircleIndex)["0"].classList.remove('CircleEnlarger');
  document.getElementsByClassName(largeCircleIndex)["0"].classList.add('CircleReducer');
  document.getElementsByClassName(smallCircleIndex)["0"].classList.add('smallCircleReducer');
  document.getElementsByClassName(smallCircleIndex)["0"].classList.remove('smallCircleEnlarger');
  setTimeout(function(nb){
    document.getElementsByClassName(circleIndex)["0"].style.zIndex = "-1";
    document.getElementsByClassName(wrapperIndex)["0"].style.zIndex = "1";
    document.getElementsByClassName(onIndex)["0"].style.zIndex = "2";
    document.getElementsByClassName(playIndex)["0"].style.zIndex = "2";
    document.getElementsByClassName(timerIndex)["0"].style.display = "block";
  }, 1000);
}

function handleCircleEnlarger(wrapperIndex,
                              circleIndex,
                              onIndex,
                              playIndex,
                              timerIndex,
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
}