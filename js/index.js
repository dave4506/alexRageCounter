window.onload = function(e){
  var rageCounter = 9000;
  var start = 3.000
  var dbRef = firebase.database().ref('/rage/');
  var timerID = setInterval(function() {
    start +=0.001
    document.getElementById("timer").textContent=start.toFixed(3)+"s"
  },1);
  dbRef.limitToLast(1).on('child_added', function(data) {
    console.log(data.val().rageTime);
    console.log("now",Date.now());
    start = Math.abs(Date.now() - data.val().rageTime)*0.001;
    console.log(start);
  });
  document.getElementById("rage").onclick = function() {
    start = 0;
    alert("He raged! Hallelujah! Tell all who are playing the alex rage drinking game to start drinking!")
    rageCounter++;
    document.getElementById("rage-counter").textContent="Rage Counter: "+rageCounter;
    console.log(Date.now());
    dbRef.push({rageTime:Date.now()});
  }
  document.getElementById("rage-counter").textContent="Rage Counter: "+rageCounter;
}

window.onunload = function() {
  clearInterval(timerId)
}
