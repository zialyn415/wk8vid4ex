// var images = [
// "img/watermellon.jpg",
// "img/nom.jpg",
// "img/banana.jpg"];
var images = [
	{
		path:"img/watermellon.jpg",
		desc:"watermellon outfit"
	},
	{
		path:"img/nom.jpg",
		desc:"nom nom"
	},
	{
		path:"img/banana.jpg",
		desc:"banana anyone?"
	}
]
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
	image.src = images[counter].path;
	image.alt = images[counter].desc;

}