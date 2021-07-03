const BODY = document.querySelector("body");
let AGE = 0;
let NABIZ = 2000;
var windowSize = {
  w: window.outerWidth,
  h: window.outerHeight,
  iw: window.innerWidth,
  ih: window.innerHeight
};
var randomWidth = () => {
  let x = 0;
  if (detectMob()) {
    //    x = getRndInteger(65,85);
    document.querySelector(".container-box").style.width = "80%";
    document.querySelector(".container-box").setAttribute("data-value",  " ");
      document.querySelector(".btn-stop").style.opacity = "0";

    x = getRndInteger(5, AGE);
    document.querySelector(".container-box").style.paddingBottom = x/2+"%";
    document.querySelector(".container-box").setAttribute("data-value",  x+"%");
    // clearInterval(interval);
    NABIZ = 1000;
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
}, NABIZ);

let stopbtn = document.querySelector(".btn-stop");

stopbtn.addEventListener("mouseover", function () {
  this.style.left = getRndInteger(-10, 99) + "%";
  this.style.top = getRndInteger(-10, 99) + "%";
  BODY.style.background = getRandomColor(98);
  this.innerHTML = "Stop it :)";
  this.style.bottom = "auto";
  this.style.background = getRandomColor(50);
  let thisthis = this;

  let olsunmu = getRndInteger(190,200);
  if(olsunmu == 195 || olsunmu == 194){
    setTimeout(function (){
      thisthis.style.left = getRndInteger(-10, 99) + "%";
      thisthis.style.top = getRndInteger(-10, 99) + "%";
    },400)
  }

});

stopbtn.addEventListener("click", function () {
  clearInterval(interval);
  BODY.style.background = "white";
  this.style.opacity = "0";
});

function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 1000;
}

function getRandomColor(brightness) {
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
  var randomColor1 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness),
      randomColor2 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  if(brightness === 50){
    return randomColor2;
    // return 'radial-gradient(at top left, '+randomColor1+', '+randomColor2+')'
  }else
    return randomColor1;

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
    AGE = current_date.getYear() - birth_date.getYear();
    age_year.innerHTML = pad(AGE);
    age_months.innerHTML = pad(Math.abs(current_date.getMonth() - birth_date.getMonth()));
    age_days.innerHTML = pad(Math.abs(current_date.getDate() - birth_date.getDate()));
    age_hours.innerHTML = pad(Math.abs(current_date.getHours() - birth_date.getHours()));
    age_minutes.innerHTML = pad(Math.abs(current_date.getMinutes() - birth_date.getMinutes()));
    age_seconds.innerHTML = pad(Math.abs(current_date.getSeconds() - birth_date.getSeconds()));
  },1000);

}

calculateAge();


//init object to store window properties
window.addEventListener("resize", function() {
  if (window.outerWidth !== windowSize.w || window.outerHeight !== windowSize.h) {
    windowSize.w = window.outerWidth; // update object with current window properties
    windowSize.h = window.outerHeight;
    windowSize.iw = window.innerWidth;
    windowSize.ih = window.innerHeight;
    BODY.style.background = getRandomColor(98);

  }
  //if the window doesn't resize but the content inside does by + or - 5%
  else if (window.innerWidth + window.innerWidth * .05 < windowSize.iw ||
      window.innerWidth - window.innerWidth * .05 > windowSize.iw) {
    windowSize.iw = window.innerWidth;
    BODY.style.background = getRandomColor(98);

  }
}, false)

