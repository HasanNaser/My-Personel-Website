const BODY = document.querySelector("body");

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
  this.style.left = getRndInteger(-10, 99) + "%";
  this.style.top = getRndInteger(-10, 99) + "%";
  BODY.style.background = getRandomColor();
  this.innerHTML = "Stop it :)";
  this.style.bottom = "auto";
  this.style.background = getRandomColor();
});

stopbtn.addEventListener("click", function () {
  clearInterval(interval);
  BODY.style.background = "white"; 
  this.style.opacity = "0";
});

function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 1000;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelector("#date_").innerHTML =(new Date()).getFullYear();
// document.querySelector(".footer").style.marginTop = (window.innerHeight/2) - 250 +"px";
// console.log(window.innerHeight)


function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}


var calculateAge = ()=>{
  let age_year = document.querySelector('#meInTheWorld .years');
  let age_months = document.querySelector('#meInTheWorld .months');
  let age_days = document.querySelector('#meInTheWorld .days');
  let age_hours = document.querySelector('#meInTheWorld .hours');
  let age_minutes = document.querySelector('#meInTheWorld .minutes');
  let age_seconds = document.querySelector('#meInTheWorld .seconds');
  let birth_date = new Date('Jan, 05, 1997');
  let years,months,days, hours, minutes, seconds;
  setInterval(function(){
    var current_date = new Date();
    age_year.innerHTML = pad(current_date.getYear() - birth_date.getYear());
    age_months.innerHTML = pad(current_date.getMonth() - birth_date.getMonth());
    age_days.innerHTML = pad(current_date.getDate() - birth_date.getDate());
    age_hours.innerHTML = pad(current_date.getHours() - birth_date.getHours());
    age_minutes.innerHTML = pad(current_date.getMinutes() - birth_date.getMinutes());
    age_seconds.innerHTML = pad(current_date.getSeconds() - birth_date.getSeconds());
  },1000);

}

calculateAge();
