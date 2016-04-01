var $ = $;
var Selecters = {
	container: ".container",
	car: ".car",
	buttons: {
		up: ".btn-up",
		bottom: ".btn-bottom",
		left: ".btn-left",
		right: ".btn-right"
	},
	lights: {
		front: ".frame-light-front",
		behine: ".frame-light-behind"
	}
};

var Utils = {
	changeLght: function (shift) {
		if (shift < 0) {
			$(Selecters.lights.front).css("right", "88%");
			$(Selecters.lights.behine).css("left", "88%");
		} else {
			$(Selecters.lights.front).css("right", "2%");
			$(Selecters.lights.behine).css("left", "2%");
		}
	}
};

var Controllers = {
	moveCarY: function (shift) {
		return function () {
			var car = $(Selecters.car);
			var top = parseInt(car.css("top"), 10);
			if ((top + shift < parseInt($(".container").css("height"), 10) - parseInt(car.css("height"), 10)) && (top + shift > 0)) {
				top = shift + top;
				car.css("top", top);
			} else {
				alert("Тупик");
			}
		};
	},
	moveCarX: function (shift) {
		return function () {
			var car = $(Selecters.car);
			var left = parseInt(car.css("left"), 10);
			if ((left + shift < parseInt($(".container").css("width"), 10) - parseInt(car.css("width"), 10)) && (left + shift > 0)) {
				left = shift + left;
				car.css("left", left);
				Utils.changeLght(shift);
			} else {
				alert("Тупик");
			}
		};
	},
	pressKeyboard: function (event) {
		console.log(event.which);
		if ((event.which === 119) || (event.which === 87) || (event.which === 1094) || (event.which === 1062)) {
			Controllers.moveCarY(-20)();
		} else {
			if ((event.which === 115) || (event.which === 83) || (event.which === 1099) || (event.which === 1067)) {
				Controllers.moveCarY(20)();
			} else {
				if ((event.which === 97) || (event.which === 65) || (event.which === 1092) || (event.which === 1060)) {
					Controllers.moveCarX(-20)();
				} else {
					if ((event.which === 100) || (event.which === 68) || (event.which === 1074) || (event.which === 1042)) {
						Controllers.moveCarX(20)();
					}
				}
			}
		}
	}
};

var Events = {
	subscribe: function () {
		$(Selecters.buttons.up).on("click", Controllers.moveCarY(-20));
		$(Selecters.buttons.bottom).on("click", Controllers.moveCarY(20));
		$(Selecters.buttons.left).on("click", Controllers.moveCarX(-20));
		$(Selecters.buttons.right).on("click", Controllers.moveCarX(20));
		$("body").on("keypress", Controllers.pressKeyboard);
	},
	unsubscribe: function () {
		$(Selecters.buttoffs.up).off("click");
		$(Selecters.buttoffs.bottom).off("click");
		$(Selecters.buttoffs.left).off("click");
		$(Selecters.buttoffs.right).off("click");
		$("body").off("keypress");
	}
};

var View = {
	init: function () {
		Events.subscribe();
	}
};
