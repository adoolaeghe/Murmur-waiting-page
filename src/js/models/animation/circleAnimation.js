function handleCircleReducer(wrapperIndex,
                            circleIndex,
                            onIndex,
                            playIndex,
                            timerIndex,
                            smallCircleIndex,
                            largeCircleIndex) {
  document.getElementById(largeCircleIndex).classList.remove('CircleEnlarger');
  document.getElementById(largeCircleIndex).classList.add('CircleReducer');
  document.getElementById(smallCircleIndex).classList.add('smallCircleReducer');
  document.getElementById(smallCircleIndex).classList.remove('smallCircleEnlarger');
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
  document.getElementById(smallCircleIndex).classList.remove('CircleReducer');
  document.getElementById(largeCircleIndex).classList.add('CircleEnlarger');
  document.getElementById(smallCircleIndex).classList.add('smallCircleEnlarger');
  document.getElementById(largeCircleIndex).classList.remove('smallCircleReducer');
  document.getElementsByClassName(circleIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(circleIndex)["0"].style.display = "block";
  document.getElementsByClassName(wrapperIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(onIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(playIndex)["0"].style.zIndex = "0";
  document.getElementsByClassName(timerIndex)["0"].style.display = "none";
}
