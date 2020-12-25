const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let runTheClock = function(){
  console.clear();
  date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  let secPosition = (360/60)*sec;
  let minPosition = (360/60)*min + (secPosition/60);
  let hrPosition = (360/12)*hr + (minPosition/12);
  
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  
  console.log(date);
}

var interval = setInterval(runTheClock, 1000);

/**
 * Browser Throttle Issue
 * clock has to catch up ever time brower throttles the javascript for the tab(throttle is disables  or pauses temporarly when we are on some new tab)
 * 
 * If throttling is fine with you(not good in real) 
 * you can have the smooth transition animation in 
 * #hour,
#minute,
#second {
    transform-origin: 300px 300px;
    // transition: transform .5s ease-in-out;} <----here 
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let secPosition = (360/60)*sec;
let minPosition = (360/60)*min + (secPosition/60);
let hrPosition = (360/12)*hr + (minPosition/12);

let runTheClock = function(){
  hrPosition = hrPosition+(30/3600);
  minPosition = minPosition+(1/60)*6;
  secPosition = secPosition + 6;
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  
  console.log(date);
  // console.clear();
}

var interval = setInterval(runTheClock, 1000);
 */