//dynamic title for someone spacial .
function animateTitle() {
    i >= message.length - 1 ? (i = 0) : i++,
      (document.title = message[i]),
      setTimeout('animateTitle()', 100)
  }
  var message = [
    ' HAPPY BIRTHDAY🎂',
    'ㅤ',
    'H',
    'HA',
    'HAP',
    'HAPP',
    'HAPPY ',
    'HAPPY B',
    'HAPPY BI',
    'HAPPY BIR',
    'HAPPY BIRT',
    'HAPPY BIRTH',
    'HAPPY BIRTHD',
    'HAPPY BIRTHDA',
    'HAPPY BIRTHDAY',
    'HAPPY BIRTHDAY🎂',
  ],
    i = 0
  animateTitle()
  
  // Current date and time 

  function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var Minisec = today.getMilliseconds()

    ap = (hr < 12) ? "<div>AM</div>" : "<div>PM</div>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    Minisec = checkTime(Minisec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + ":"+  Minisec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 00);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();
//countdown 
var deadline = new Date("Nov 30, 2022 11:40:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
var Minisecons = Math.floor((t% (1000 * 60)));
document.getElementById("demo").innerHTML = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s " + Minisecons + "ms";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "yooo";
    }
}, 00);
