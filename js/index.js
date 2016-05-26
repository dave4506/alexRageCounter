window.onload = function(e){
  var rageCounter = 9000;
  var start = 3.00
  var dbRef = firebase.database().ref('/rage/');
  var timerID = setInterval(function() {
    start +=0.1
    document.getElementById("timer").textContent=start.toFixed(1)+"s"
  },100);
  dbRef.limitToLast(1).on('child_added', function(data) {
    console.log(data.val().rageTime);
    console.log("now",data);
    start = Math.abs(Date.now() - data.val().rageTime);
    console.log(start);
  });
  document.getElementById("rage").onclick = function() {
    start = 0;
    alert("He raged! Hallelujah! Tell all who are playing the alex rage drinking game to start drinking!")
    rageCounter++;
    document.getElementById("rage-counter").textContent="Rage Counter: "+rageCounter;
    dbRef.push({rageTime:firebase.database.ServerValue.TIMESTAMP});
  }
  document.getElementById("rage-counter").textContent="Rage Counter: "+rageCounter;
}

window.onunload = function() {
  clearInterval(timerId)
}
