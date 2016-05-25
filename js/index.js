window.onload = function(e){
  var rageCounter = 9000;
  var start = 3.00
  var dbRef = firebase.database().ref('/rage/');
  var timerID = setInterval(function() {
    start +=0.1
    document.getElementById("timer").textContent=start.toFixed(1)+"s"
  },100);
  document.getElementById("rage").onclick = function() {
    start = 0;
    alert("He raged! Hallelujah! Tell all who is playing the alex rage drinking game to start drinking!")
    rageCounter++;
    document.getElementById("rage-counter").textContent="Rage Counter: "+rageCounter;
    dbRef.push({rageTime:Date.now()});
  }
  document.getElementById("rage-counter").textContent="Rage Counter: "+rageCounter;
}

window.onunload = function() {
  clearInterval(timerId)
}
