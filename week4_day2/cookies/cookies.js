Cookies.set('myFirstCookie', 'cool, huh?')
Cookies.get('myFirstCookie');

$(document).ready(function(){
  $('#chip-count').text(Cookies.get('chip'));

  $('#chip').click(function(){
    console.log('checking');
    var chips = parseInt(Cookies.get('chip'));
    if(chips){
      Cookies.set('chip', chips + 1);
    } else {
      Cookies.set('chip', 1);
    }
    $('#chip-count').text(Cookies.get('chip'));
  });
});

// You can expire (reset to undefined) any cookie like this!
// Cookies.expire('chip')
