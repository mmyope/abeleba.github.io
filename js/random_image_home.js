// JavaScript Document

	function getRandomImage(home_num) {

		let numImages = 9;
		let randNum = Math.floor(Math.random()*numImages) +1;
		let image = 'images/home/mmyope-'+ home_num + '/' + randNum + '.gif'

    var htmlImage = document.getElementById("mmyope_gif");
    htmlImage.src = image
	}
