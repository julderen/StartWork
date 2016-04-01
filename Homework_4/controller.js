var $ = $;
var car = $(".car");
$(".btn-up").click(function () {
	var shift = -20;
	moveCarY(shift);
});
$(".btn-bottom").click(function () {
	var shift = 20;
	moveCarY(shift);
});
$(".btn-left").click(function () {
	var shift = -20;
	moveCarX(shift);
});
$(".btn-right").click(function () {
	var shift = 20;
	moveCarX(shift);
});

function moveCarX(shift) {
	var left = parseInt(car.css("left"), 10);
	if ((left + shift < parseInt($(".container").css("width"), 10) - parseInt(car.css("width"), 10)) && (left + shift > 0)) {
		left = shift + left;
		car.css("left", left);
		swapLght(shift);
	} else {
		alert("Тупик");
	}
}
function moveCarY(shift) {
	var top = parseInt(car.css("top"), 10);
	if ((top + shift < parseInt($(".container").css("height"), 10) - parseInt(car.css("height"), 10)) && (top + shift > 0)) {
		top = shift + top;
		car.css("top", top);
	} else {
		alert("Тупик");
	}
}
function swapLght(shift) {
	if (shift < 0) {
		$(".frame-light-front").css("right", "88%");
		$(".frame-light-behind").css("left", "88%");
	} else {
		$(".frame-light-front").css("right", "2%");
		$(".frame-light-behind").css("left", "2%");
	}
}
