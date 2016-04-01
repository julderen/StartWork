var $ = $;
var colors = ["#7AEB00", "#FFD300", "#00D1DB", "#D800E0", "#FA0027", "#EA009E"];
var cube = "#cube";
var sizeOfCube;
var speedOfCube;
var TheValueNow;
var shift;
var coefficientForStep = 5;
var cubeElement = $(cube);
do {
	sizeOfCube = +prompt("Укажите размер кнопки(0<x<100)", "50");
} while ((sizeOfCube < 0) || (sizeOfCube > 100));

do {
	speedOfCube = +prompt("Укажите скорость перемещения кнопки(1 мс. < t <200 мс.)(", "100");
} while ((speedOfCube < 0) || (speedOfCube >= 200));

function randomInteger(min, max) {
	var rand = min + Math.random() * (max - min);
	rand = Math.round(rand);
	return rand;
}
cubeElement.css("width", sizeOfCube);
cubeElement.css("height", sizeOfCube);

cubeElement.click(function () {
	$("body").css("background-color", colors[randomInteger(0, colors.length)]);
});

setInterval(function () {
	shift = randomInteger(-sizeOfCube * coefficientForStep, sizeOfCube * coefficientForStep);
	TheValueNow = parseInt(cubeElement.css("top"));
	shift = shift + TheValueNow;
	if (((shift) > (0)) && ((shift) < (400 - sizeOfCube))) {
		cubeElement.css("top", shift);
	}

	shift = randomInteger(-sizeOfCube * coefficientForStep, sizeOfCube * coefficientForStep);
	TheValueNow = parseInt(cubeElement.css("left"));
	shift = shift + TheValueNow;

	if (((shift) > (0)) && ((shift) < (400 - sizeOfCube))) {
		cubeElement.css("left", shift);
	}
}, randomInteger(speedOfCube, (speedOfCube * 0.1 + speedOfCube * 2)));
