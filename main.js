var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "images/5.png";
images[1] = "images/6.png";
images[2] = "images/7.png";
//images[3] = "http://lorempixel.com/400/200/people";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;






// SLIDER FUNCTION FROM SWIPER.JS LIBARY

const swiper = new Swiper('.swiper-container', {
	autoplay: {
	  delay: 1000,
	  loop: true,
	},

	pagination: {
		el: '.swiper-pagination',
	  },
   });