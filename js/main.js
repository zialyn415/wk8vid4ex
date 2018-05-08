var images = [
"img/watermellon.jpg",
"img/nom.jpg",
"img/banana.jpg"]
var image = document.getElementById("watermellon");
var counter = 0;
function changeImage() {
	counter++;
	//I want my image element to change
	//I need to change the src attribute
	//access image src set it = new image
	if(counter >= images.length) {
		counter = 0;
	}
	console.log(counter);
	image.src = images[counter];

}