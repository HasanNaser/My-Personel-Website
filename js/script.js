var randomWidth = () => {
  let x = 0;
  if (detectMob()) {
    //    x = getRndInteger(65,85);
    document.querySelector(".container-box").style.width = "80%";
    document.querySelector(".container-box").setAttribute("data-value",  " "); 
      document.querySelector(".btn-stop").style.opacity = "0";
    clearInterval(interval);
  } else {
    x = getRndInteger(30, 70); 
    document.querySelector(".container-box").style.width = x + "%";
    document.querySelector(".container-box").setAttribute("data-value", x+ "%"); 

  }
};

var getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

randomWidth();

var interval = setInterval(() => {
  randomWidth();
}, 2000);

let stopbtn = document.querySelector(".btn-stop");
stopbtn.addEventListener("mouseover", function () {
  this.style.left = getRndInteger(0, 99) + "%";
  this.style.top = getRndInteger(0, 99) + "%";
  this.innerHTML = "Stop it :)";
  this.style.bottom = "auto";
  this.style.backgroundColor = "#8c8be1e3";
});

stopbtn.addEventListener("click", function () {
  clearInterval(interval);
  this.style.opacity = "0";
});

function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 600;
}
