

// Array of image data

var imageData = new Array(10)

createTwoDimensionalArray(3);



// Image path data

imageData[0][0]="images/ADPortfolio.png";

imageData[1][0]="images/pairPortfolio.png";

imageData[2][0]="images/comingSoon.jpg";

imageData[3][0]="images/comingSoon.jpg";

imageData[4][0]="images/comingSoon.jpg";

imageData[5][0]="images/comingSoon.jpg";

imageData[6][0]="images/comingSoon.jpg";

imageData[7][0]="images/comingSoon.jpg";

imageData[8][0]="images/comingSoon.jpg";

imageData[9][0]="images/comingSoon.jpg";


// Image title data

imageData[0][1]="";

imageData[1][1]="";

imageData[2][1]="";

imageData[3][1]="";

imageData[4][1]="";

imageData[5][1]="";

imageData[6][1]="";

imageData[7][1]="";

imageData[8][1]="";

imageData[9][1]="";



// Image description data

imageData[0][2]="This is one of the early refinements of this website, we moved through multiple stages of development to get the feel we want.";

imageData[1][2]="This Project involved making a peer-to-peer based education system in a group of 6, we used this as an opportunity to learn the fundamentals of website and Database design.";

imageData[2][2]="More websites coming soon.";

imageData[3][2]="More websites coming soon.";

imageData[4][2]="More websites coming soon.";

imageData[5][2]="More websites coming soon.";

imageData[6][2]="More websites coming soon.";

imageData[7][2]="More websites coming soon.";

imageData[8][2]="More websites coming soon.";

imageData[9][2]="More websites coming soon.";


// Our index, boundry and scroll tracking variables

var imageIndexFirst = 0;

var imageIndexLast = 3;

var continueScroll = 0;

var maxIndex = 9;

var minIndex = 0;


// This function creates our two dimensional array

function createTwoDimensionalArray(arraySize) {

for (i = 0; i < imageData.length; ++ i)

imageData[i] = new Array(arraySize);

}


// This function preloads the thumbnail images

function preloadThumbnails() {

imageObject = new Image();

for (i = 0; i < imageData.length; ++ i)

imageObject.src = imageData[i][0];

}



// This function changes the text of a table cell

function changeCellText(cellId,myCellData){

document.getElementById(cellId).innerHTML = myCellData;

}


// This function changes the images

function changeImage(ImageToChange,MyimageData){

document.getElementById(ImageToChange).setAttribute('src',MyimageData)

}


// This function changes the image alternate text

function changeImageAlt(ImageToChange,imageData){

document.getElementById(ImageToChange).setAttribute('alt',imageData)

}


// This function changes the image alternate text

function changeImageTitle(ImageToChange,imageData){

document.getElementById(ImageToChange).setAttribute('title',imageData)

}


// This function changes the image onmouseover

function changeImageOnMouseOver(ImageToChange,imageIndex){

document.getElementById(ImageToChange).setAttribute('onmouseover','handleThumbOnMouseOver(' + imageIndex + ');')

}


// This function hanles calling on change function

// for a thumbnail onmouseover event

function handleThumbOnMouseOver(imageIndex){

changeImage('imageLarge',imageData[imageIndex][0]);

changeCellText('imageTitleCell',imageData[imageIndex][1]);

changeCellText('imageDescriptionCell',imageData[imageIndex][2]);

changeImageAlt('imageLarge',imageData[imageIndex][1] + ' - ' + imageData[imageIndex][2]);

changeImageTitle('imageLarge',imageData[imageIndex][1] + ' - ' + imageData[imageIndex][2]);

}


// This function handles the scrolling in both directions

function scrollImages(scrollDirection) {

// We need a variable for holding our working index value

var currentIndex;

// Determine which direction to scroll - default is down (left)

if (scrollDirection == 'up')

{

// Only do work if we are not to the last image

if (imageIndexLast != maxIndex)

{

// We set the color to black for both before we begin

// If we reach the end during the process we'll change the "button" color to silver

document.getElementById('scrollPreviousCell').setAttribute('style','color: Black')

document.getElementById('scrollNextCell').setAttribute('style','color: Black')

// Move our tracking indexes up one

imageIndexLast = imageIndexLast + 1;

imageIndexFirst = imageIndexFirst + 1;

//  Change next "button" to silver if we are at the end

if (imageIndexLast == maxIndex)

{

document.getElementById('scrollNextCell').setAttribute('style','color: Silver')

}

// Changescrollbar images in a set delay sequence to give a pseudo-animated effect

currentIndex = imageIndexLast;

changeImage('scrollThumb4',imageData[currentIndex][0]);

changeImageOnMouseOver('scrollThumb4',currentIndex);

currentIndex = imageIndexLast - 1;

setTimeout("changeImage('scrollThumb3',imageData[" + currentIndex + "][0])",25);

setTimeout("changeImageOnMouseOver('scrollThumb3'," + currentIndex + ")",25);

currentIndex = imageIndexLast - 2;

setTimeout("changeImage('scrollThumb2',imageData[" + currentIndex + "][0])",50);

setTimeout("changeImageOnMouseOver('scrollThumb2'," + currentIndex + ")",50);

currentIndex = imageIndexLast - 3;

setTimeout("changeImage('scrollThumb1',imageData[" + currentIndex + "][0])",75);

setTimeout("changeImageOnMouseOver('scrollThumb1'," + currentIndex + ")",75);

// Wait and check to see if user is still hovering over button

// This pause gives the user a chance to move away from the button and stop scrolling

setTimeout("scrollAgain('" + scrollDirection + "')",1000);

}

}

else

{

// Only do work if we are not to the first image

if (imageIndexFirst != minIndex)

{

// We set the color to black for both before we begin

// If we reach the end during the process we'll change the "button" color to silver

document.getElementById('scrollPreviousCell').setAttribute('style','color: Black')

document.getElementById('scrollNextCell').setAttribute('style','color: Black')

// Move our tracking indexes down one

imageIndexLast = imageIndexLast - 1;

imageIndexFirst = imageIndexFirst - 1;

//  Change previous "button" to silver if we are at the beginning

if (imageIndexFirst == minIndex)

{

document.getElementById('scrollPreviousCell').setAttribute('style','color: Silver')

}

// Change scrollbar images in a set delay sequence to give a pseudo-animated effect

currentIndex = imageIndexFirst;

changeImage('scrollThumb1',imageData[currentIndex][0]);

changeImageOnMouseOver('scrollThumb1',currentIndex);

currentIndex = imageIndexFirst + 1;

setTimeout("changeImage('scrollThumb2',imageData[" + currentIndex + "][0])",25);

setTimeout("changeImageOnMouseOver('scrollThumb2'," + currentIndex + ")",25);

currentIndex = imageIndexFirst + 2;

setTimeout("changeImage('scrollThumb3',imageData[" + currentIndex + "][0])",50);

setTimeout("changeImageOnMouseOver('scrollThumb3'," + currentIndex + ")",50);

currentIndex = imageIndexFirst + 3;

setTimeout("changeImage('scrollThumb4',imageData[" + currentIndex + "][0])",75);

setTimeout("changeImageOnMouseOver('scrollThumb4'," + currentIndex + ")",75);

// Wait and check to see if user is still hovering over button

// This pause gives the user a chance to move away from the button and stop scrolling

setTimeout("scrollAgain('" + scrollDirection + "')",1000);

}

}

}


// This function determines whether or not to keep scrolling

function scrollAgain(scrollDirection)

{

if (continueScroll == 1)

{

scrollImages(scrollDirection);

}

}


// This function kicks off scrolling down (left)

function scrollPrevious() {

continueScroll = 1;

scrollImages('down');

}


// This function kicks off scrolling up (right)

function scrollNext() {

continueScroll = 1;

scrollImages('up');

}


// This function stops the scrolling action

function scrollStop() {

continueScroll = 0;

}