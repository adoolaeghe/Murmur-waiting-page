function handleCircleReducer() {
  document.getElementById("circle1").classList.remove('CircleEnlarger');
  document.getElementById("circle1").classList.add('CircleReducer');
  document.getElementById("circle3").classList.add('smallCircleReducer');
  document.getElementById("circle3").classList.remove('smallCircleEnlarger');
  setTimeout(function(){
    document.getElementById('circle').style.zIndex = "-1";
    document.getElementById('play').style.zIndex = "2";
    document.getElementById('on').style.zIndex = "2";
    document.getElementById('wrapper1').style.zIndex = "1";
    document.getElementById('timer').style.display = "block";
  }, 1000);
}

function handleCircleEnlarger() {
  document.getElementById('circle').style.zIndex = "0";
  document.getElementById('play').style.zIndex = "0";
  document.getElementById('on').style.zIndex = "0";
  document.getElementById('wrapper1').style.zIndex = "0";
  document.getElementById("circle1").classList.remove('CircleReducer');
  document.getElementById("circle1").classList.add('CircleEnlarger');
  document.getElementById('circle').style.display = "block";
  document.getElementById("circle3").classList.add('smallCircleEnlarger');
  document.getElementById("circle3").classList.remove('smallCircleReducer');
  document.getElementById('timer').style.display = "none";
}
