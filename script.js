var slideIndex = 1;
var pageIndex = 1; // TODO: try to get citation page to know what page the user was previously on and then send them there??
var topToggle = true;
var autoSlides = true;




window.addEventListener("load", function() {
	var slideshowMain = document.getElementById("slideshowMain");
	var debugThing = document.getElementById("debugThing");
	showSlides(slideIndex);
	timer = setInterval(function() {plusSlides(1)}, 7000);

	seamless.polyfill(); // Fixes scroll-behavior: smooth for browsers that don't support it

	slideshowMain.addEventListener('mouseenter', pause);
slideshowMain.addEventListener('mouseleave', resume); // From https://betterprogramming.pub/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9
})


pause = () => {
	clearInterval(timer);
	debugThing.style.color = "gray";
}

resume = () => {
	clearInterval(timer);
	timer = setInterval(function() {plusSlides(1)}, 7000);
	debugThing.style.color = "red";
}




function plusSlides(n) {
	clearInterval(timer);
	showSlides(slideIndex += n);

	timer = setInterval(function() {plusSlides(1)}, 7000);

}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slidesImg");
	var slidesCaption = document.getElementsByClassName("slidesCaption");


	if (n > slides.length) {slideIndex = 1} // When n exceeds length, wrap back around
		if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) // For loop
	{
		slides[i].style.opacity = "0";
		slidesCaption[i].style.opacity = "0";
	}

/*
	slideIndexPreload = n-2;

	if (slideIndexPreload <= 0)
	{
		slideIndexPreload = slides.length - Math.abs(slideIndexPreload)
	}

	if (slideIndexPreload <= -1)
	{
		slideIndexPreload = slides.length - abs(slideIndexPreload);
	}

	console.warn(slideIndexPreload);



	slides[slideIndexPreload].style.opacity = "1";
	slides[slideIndexPreload].style.zIndex = "-10"; FIX */


	slides[slideIndex-1].style.opacity = "1";
	slidesCaption[slideIndex-1].style.opacity = "1";
}


var tooltipContainer = document.getElementsByClassName("infoButton");
var tooltip = document.getElementsByClassName("infoTooltip");
tooltipContainer.addEventListener("mouseover", tooltipShift());

function tooltipShift()
{
	var bounding = tooltip.getBoundingClientRect();
	alert("TEST");
	if (bounding.right > (window.innerWidth || document.documentElement.clientWidth))
	{
			tooltip.style.marginLeft += 10; // WIP
			alert("RIGHT");
			tooltipShift();
		}
		else if (bounding.left < 0)
		{
			alert("LEFT");
			tooltip.style.marginLeft -= 10;
			tooltipShift();
		}
	}


	function topButtonToggle()
	{
		var topButton = document.getElementsByClassName("topButton");

		if (topToggle == true)
		{
			topButton.style.bottom = "-25%";
			topToggle = false;
			alert("TRUE");
		}
		else
		{
			topButton.style.bottom = "-6%";
			topToggle = true;
			alert("FALSE");
		}
	}
