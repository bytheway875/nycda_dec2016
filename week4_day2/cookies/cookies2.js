$(document).ready(function(){
  cookieDOM('chip');
  cookieDOM('sugar');
  cookieDOM('oatmeal');
  cookieDOM('macademia');

  // $('#chip-count').text(Cookies.get('chip'));
  // $('#chip').on("click", function(){
  //   addOneMoreCookie('chip');
  //   $('#chip-count').text(Cookies.get('chip'));
  // });

  // $('#sugar-count').text(Cookies.get('sugar'));
  // $('#sugar').on("click", function(){
  //   addOneMoreCookie('sugar');
  //   $('#sugar-count').text(Cookies.get('sugar'));
  // });
  //
  // $('#oatmeal-count').text(Cookies.get('oatmeal'));
  // $('#oatmeal').on("click", function(){
  //   addOneMoreCookie('oatmeal');
  //   $('#oatmeal-count').text(Cookies.get('oatmeal'));
  // });


})

// 1. get the value of our 'chips' key from our cookies. DONE
// 2. if the value of 'chips' is undefined, we need to set it to 0 so that we can add to it! DONE
// 3. since the value of a cookie is always a string,
// we need to convert the value to an integer
// 4. then we add one more to it!
// 5. Set the 'chips' key to our new value
function addOneMoreCookie(cookieKey){
  var cookieCount = Cookies.get(cookieKey); // 1
  if (cookieCount == undefined){ cookieCount = 0; } // 2
  cookieCount = parseInt(cookieCount); // 3
  cookieCount++; // 4
  Cookies.set(cookieKey, cookieCount); // 5
}

// sugar
// chips
// oatmeal
function cookieDOM(cookieType){
  $(`#${cookieType}-count`).text(Cookies.get(cookieType));
  $(`#${cookieType}`).on("click", function(){
    addOneMoreCookie(cookieType);
    $(`#${cookieType}-count`).text(Cookies.get(cookieType));
  });
}

// chips
// sugar
// oatmeal
