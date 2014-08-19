document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('media-video');
}
var mediaPlayer = document.getElementById('media-video');
function loadVideo() {
   for (var i = 0; i < arguments.length; i++) {
      var file = arguments[i].split('.');
      var ext = file[file.length - 1];
      if (canPlayVideo(ext)) {
         mediaPlayer.src = arguments[i];
         mediaPlayer.load();
         break;
      }
   }
}

// checks if the video type is supported
function canPlayVideo(ext) {
   var ableToPlay = mediaPlayer.canPlayType('video/' + ext);
   if (ableToPlay == '') return false;
   else return true;
}

// Gets the info for a video
function getInfo(fileName) {
    var fileReader = FileReader();
    var file = document.getElementsByName('../video/eiffelTowerInfo')
}

// Create an array to hold imageData

var imageData = new Array(10)

createTwoDimensionalArray(3);

// This function creates our two dimensional array

function createTwoDimensionalArray(arraySize) {

for (i = 0; i < imageData.length; ++ i)

imageData[i] = new Array(arraySize);

}
