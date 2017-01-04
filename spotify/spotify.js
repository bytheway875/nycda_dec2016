// I like to define a global variable to store my response in when I'm working in "development mode" on an API so that I can access and experiment with my response in the console.
var spotifyResponse;
var trackId;
var trackInfo;
var artistInfo;
var albumInfo;
var previewUrl;
var artistId;
var beyonceId; // beyonce's artistId

// https://api.spotify.com/v1/search?type=track&q=Christmas
$.ajax({
  method: "GET",
  url: "https://api.spotify.com/v1/search",
  data: {
      type: "artist",
      q: "Beyonce"
    },
  success: function(response){  // This function will run
    spotifyResponse = response; // once you get a successful
    console.log(response)       // response from the API!
    beyonceId = spotifyResponse.artists.items[0].id // beyonce
  }
})


trackId = "6NMz3Cjvod2qnJjakiRDA8";
// This time, I only need to set the url and my success callback!
// 'method' defaults to 'GET', so we don't need to tell it,
// and we send the ID as part of the URL (note my string interpolation).
$.ajax({
    url: `https://api.spotify.com/v1/tracks/${trackId}`,
    success: function(response){
      trackInfo = response;
      console.log(response)
    }
}).done(function(){
  previewUrl = trackInfo.preview_url;
  console.log('previewUrl', previewUrl);

  // // Note that the key is artists, and the value is an array. Some songs have multiple artists!
  // artistId = trackInfo.artists[0].id;
  // console.log('artistId', artistId);
  //
  // albumId = trackInfo.album.id
  // console.log('albumId', albumId);
  //
  // $.ajax({
  //     url: `https://api.spotify.com/v1/artists/${artistId}`,
  //     success: function(response){
  //       artistInfo = response;
  //       console.log(response)
  //     }
  // });
});

// We have to wait until the previous request is "done" to set the artistId from the response, or else it will be undefined. If you want to wait to use the artistId inside of the done callback function, move the ajax call inside of the done callback!
artistId = "6vWDO969PvNqNYHIOW5v0m"
$.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/artists/${artistId}`,
    success: function(response){
      artistInfo = response;
      console.log(response)
    }
});

albumId = "6XodQl1BPzs13GY61iXQv7"

$.ajax({
    url: `https://api.spotify.com/v1/albums/${albumId}`,
    success: function(response){
      albumInfo = response;
      console.log(response)
    }
});
