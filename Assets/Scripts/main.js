var getCurrentDate = window.setInterval(function() {
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("currentTime").innerHTML = date
}, 1000)

// Choose Image
let updateBackgroundImg = window.setInterval(function() {
   let backgroundImg = ["Assets/Images/plant-invasion.jpg", "Assets/Images/messy-house.jpg", "Assets/Images/fallen-traffic-cone.jpg", "Assets/Images/trees.jpg", "Assets/Images/uninhabited.jpg", "Assets/Images/wall.jpg", "Assets/Images/creeping-vines.jpg"][Math.floor(Math.random() * 7)];
   document.querySelector("#title-background").style.backgroundImage = `url("${backgroundImg}")`;
}, 5000)
