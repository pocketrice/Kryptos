var topToggle = true;
var naturalTop = true;




window.addEventListener("load", function() {
	seamless.polyfill(); // Fixes scroll-behavior: smooth for browsers that don't support it
})


function topCheck() { // Scroll detection via JS is broken by overflow-x: hidden. This is a workaround.
  var header = document.getElementsByClassName("top");
  var rect = header[0].getBoundingClientRect(); // https://stackoverflow.com/questions/7922988/jquery-detect-coordinate-of-top-of-page-after-scrolling
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  if (((rect.bottom < 0 || rect.top - viewHeight >= 0) && (naturalTop == true)) == true)
  { // NATURAL, NOT TOP
  	topToggle = false;
  	topButtonToggle(1);
  	console.log("NATURAL/NT");
  }
  /*else if (((rect.bottom < 0 || rect.top - viewHeight >= 0) && (naturalTop == false)) == true)
  { // UNNATURAL, NOT TOP -- does nothing

  }*/
  else if ((!(rect.bottom < 0 || rect.top - viewHeight >= 0) && (naturalTop == true)) == true)
  { // NATURAL, TOP
  	topToggle = true;
	topButtonToggle(2);
  	console.log("NATURAL/T");
  }
}




	function topButtonToggle(n)
	{
		var topButton = document.getElementsByClassName("topbutton");
		var minimize = document.getElementsByClassName("topbuttonToggle");

		if (topToggle == true && n == 1)
		{ // Only call when not minimized (topToggle == true) and button -- not X -- is pressed (n == 1).
			window.scrollTo(0, 0);
		}

		if (topToggle == true && n == 0) // Only minimize has n = 0
		{
			minimize[0].style.opacity = "0";
			minimize[0].style.bottom = "-10px";
			topButton[0].style.bottom = "-140px";
			topToggle = false;
			naturalTop = false;
		}
		else if (topToggle == false && n == 1) // Only topButton has n = 1
		{
			minimize[0].style.opacity = "1";
			minimize[0].style.bottom = "105px";
			topButton[0].style.bottom = "-30px";
			topToggle = true;
			naturalTop = true;
		}
		else if (n == 2)
		{
			minimize[0].style.opacity = "0";
			minimize[0].style.bottom = "-10px";
			topButton[0].style.bottom = "-140px";
			topToggle = false;
		}
	}
