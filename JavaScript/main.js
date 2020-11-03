var getCurrentDate = window.setInterval(function() {
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("currentTime").innerHTML = date
}, 1000)

//window.onbeforeunload = function(){
 // return 'Are you sure you want to leave?';
//};
