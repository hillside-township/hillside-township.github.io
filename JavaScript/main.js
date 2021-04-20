var getCurrentDate = window.setInterval(function() {
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("currentTime").innerHTML = date
}, 1000)

// Choose Image
let updateBackgroundImg = window.setInterval(function() {
   let backgroundImg = ["Images/plant-invasion.jpg", "Images/messy-house.jpg", "Images/fallen-traffic-cone.jpg", "Images/trees.jpg", "Images/uninhabited.jpg", "Images/wall.jpg", "Images/creeping-vines.jpg"][Math.floor(Math.random() * 7)];
   document.querySelector("#title-background").style.backgroundImage = `url("${backgroundImg}")`;
}, 5000)
