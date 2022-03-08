var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n)
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slidesImg");
	var slidesCaption = document.getElementsByClassName("slidesCaption");

	if (n > slides.length) {slideIndex = 1} // When n exceeds length, wrap back around
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) // For loop
	{
		slides[i].style.display = "none";
		slidesCaption[i].style.display = "none";

	}
	slides[slideIndex-1].style.display = "block";
	slidesCaption[slideIndex-1].style.display = "block";

	//alert(slideIndex);
}






document.addEventListener('keydown', slideshowManualMove)

function slideshowManualMove()
{
	if (e.key === 'ArrowLeft')
	{
		showSlides(slideIndex -= 1);
	}

	if (e.key === 'ArrowRight')
	{
		showSlides(slideIndex += 1);
	}
}