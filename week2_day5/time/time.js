function zeroPrefixed(number){
  if(number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

function zeroPrefixedDateObject(dateObject){
  var hours   = zeroPrefixed(dateObject.getHours());
  var minutes = zeroPrefixed(dateObject.getMinutes());
  var seconds = zeroPrefixed(dateObject.getSeconds());
  return { hours: hours, minutes: minutes, seconds: seconds };
}

function hexCodeFrom(myDate){
  return `#${myDate.hours}${myDate.minutes}${myDate.seconds}`;
}

function clockTime(myDate){
  return `${myDate.hours}:${myDate.minutes}:${myDate.seconds}`;
}

function changeTime(){
  setInterval(function(){
    var date = zeroPrefixedDateObject(new Date);
    $('#time').text(hexCodeFrom(date));
    $('body').css('background-color', hexCodeFrom(date));
  }, 1000)
}

$(document).ready(function(){
  changeTime();
})
