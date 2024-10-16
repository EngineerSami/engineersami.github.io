
function myFunction() {
    if (document.getElementById("change").innerText == "☀️") {
    document.getElementById("main").style.backgroundColor = "#eeeeee";
    document.getElementById("top-bar").style.backgroundColor = "#eeeeee";
    document.getElementById("link1").style.color = "black";
    document.getElementById("link2").style.color = "black";
    document.getElementById("link3").style.color = "black";
    document.getElementById("link4").style.color = "black";
    document.getElementById("description").style.color = "black";
    document.getElementById("unv").style.color = "black";
    document.getElementById("location").style.color = "black";
    document.getElementById("proj").style.color = "black";
    document.getElementById("myname").style.color = "black";
    document.getElementById("change").innerText = "🌙"
    document.getElementById("change").style.color = "black";
    document.getElementById("change").style.backgroundColor = "#eeeeee";
    document.getElementById("body").style.backgroundImage = "url(https://i.pinimg.com/originals/89/e3/7d/89e37d9611818e81f65d368d0350e5c7.jpg)";
  }
  else  {
    document.getElementById("main").style.backgroundColor = "#060c21";
    document.getElementById("top-bar").style.backgroundColor = "#060c21";
    document.getElementById("link1").style.color = "white";
    document.getElementById("link2").style.color = "white";
    document.getElementById("link3").style.color = "white";
    document.getElementById("link4").style.color = "white";
    document.getElementById("description").style.color = "white";
    document.getElementById("unv").style.color = "white";
    document.getElementById("location").style.color = "white";
    document.getElementById("proj").style.color = "white";
    document.getElementById("myname").style.color = "white";
    document.getElementById("change").innerText = "☀️";
    document.getElementById("change").style.color = "white";
    document.getElementById("change").style.backgroundColor = "#060c21";
    document.getElementById("change").style.backgroundColor = "#060c21";
    document.getElementById("body").style.backgroundImage = "url(https://wallpapercave.com/wp/wp7684851.png)";
  }
}
const myDiv = document.getElementById('loadingScreen');


setTimeout(() => {
  myDiv.remove();
}, 3500);

const myAudio = document.getElementById('myAudio');

setTimeout(() => {
  myAudio.play();
}, 3500); 
