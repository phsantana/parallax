window.addEventListener("scroll",parallax);

function parallax(){

	[].forEach.call(document.querySelectorAll(".parallax"),parallax => {

		var roll = document.documentElement.scrollTop/5;

		var bg = "calc(50% + " + roll + "px)";

		parallax.style.backgroundPosition = 'center ' + bg;
	});
}