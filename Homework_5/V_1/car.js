var $ = $;
var Selecters = {
	container: ".container",
	car: ".car",
	buttons: {
		up: ".btn-up", 
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
	getHeight: function () {
		return $(window).height();
	},
	getWidth: function () {
		return $(window).width();
	},
	createCube: function (left, top) {
	var txt2 = $("<div></div>");
		$(txt2).css("position", "absolute");
		$(txt2).css("border-radius", "5px");
		$(txt2).css("left", left);
		$(txt2).css("top", top);
		$(txt2).css("width", 20);
		$(txt2).css("height", 20);
		$(txt2).css("background", "#FF7CB8");
		$(".container").append(txt2);
	},

	createContainer: function () {
		var height = Controllers.getHeight() - Controllers.getHeight() % 20;
		var width = Controllers.getWidth() - Controllers.getWidth() % 20;
		var i, j;

		for (i = 0; i < width / 20; i++) {
			for (j = 0; j < height / 20; j++) {
				labyrinth[i][j] = 0;
			}
		}
		console.log(height);
		console.log(width);
		$(".container").css("height", height);
		$(".container").css("width", width);
		$(".container").css("margin-left", (-width / 2));
		$(".container").css("margin-top", (-height / 2));

		Controllers.createBorderWall(width, height);
		Controllers.drawLabyrinth(width, height);
	},

	drawLabyrinth: function (width, height) {
		var i, j;
		for (i = 0; i < width / 20; i++) {
			for (j = 0; j < height / 20; j++) {
				if (labyrinth[i][j] === 2) {
					Controllers.createCube(i * 20, j * 20);
				}
			}
		}
	},

	createLabyrinth: function (width, height, begin, i, j, exit) {
		labyrinth[i][j] = 1;
		if ((i + 1 < width / 20) && (labyrinth[i + 1][j] === 0)) {
			if ((Math.random() > 0.2) && ((i + 1 !== exit.i) || (j + 1 !== exit.j)) && (labyrinth[i + 1][j + 1] === 0)) {
				labyrinth[i + 1][j + 1] = 2;
			}
			if ((Math.random() > 0.2) && ((i + 1 !== exit.i) || (j - 1 !== exit.j)) && (labyrinth[i + 1][j - 1] === 0)) {
				labyrinth[i + 1][j - 1] = 2;
			}
			Controllers.createLabyrinth(width, height, begin, i + 1, j, exit);
		}
		if ((j + 1 < height / 20) && (labyrinth[i][j + 1] === 0)) {
			if ((Math.random() > 0.2) && ((i + 1 !== exit.i) || (j + 1 !== exit.j)) && (labyrinth[i + 1][j + 1] === 0)) {
				labyrinth[i + 1][j + 1] = 2;
			}
			if ((Math.random() > 0.2) && ((i - 1 !== exit.i) || (j + 1 !== exit.j)) && (labyrinth[i - 1][j + 1] === 0)) {
				labyrinth[i - 1][j + 1] = 2;
			}
			Controllers.createLabyrinth(width, height, begin, i, j + 1, exit);
		}
		if ((i - 1 > 1) && (labyrinth[i - 1][j] === 0)) {
			if ((Math.random() > 0.2) && ((i - 1 !== exit.i) || (j + 1 !== exit.j)) && (labyrinth[i - 1][j + 1] === 0)) {
				labyrinth[i - 1][j + 1] = 2;
			}
			if ((Math.random() > 0.2) && ((i - 1 !== exit.i) || (j - 1 !== exit.j)) && (labyrinth[i - 1][j - 1] === 0)) {
				labyrinth[i - 1][j - 1] = 2;
			}
			Controllers.createLabyrinth(width, height, i - 1, j, exit);
		}
		if ((j - 1 > 1) && (labyrinth[i][j - 1] === 0)) {
			if ((Math.random() > 0.2) && ((i + 1 !== exit.i) || (j - 1 !== exit.j)) && (labyrinth[i + 1][j - 1] === 0)) {
				labyrinth[i + 1][j - 1] = 2;
			}
			if ((Math.random() > 0.2) && ((i - 1 !== exit.i) || (j - 1 !== exit.j)) && (labyrinth[i - 1][j - 1] === 0)) {
				labyrinth[i + 1][j - 1] = 2;
			}
			Controllers.createLabyrinth(width, height, begin, i, j - 1, exit);
		}
		if ((i === begin.i) && (j === begin.j)) {
			Controllers.drawLabyrinth(width, height);
		}
	},

	createBorderWall: function (left, top) {
		var i;
		for (i = 0; i < left / 20; i += 1) {
			labyrinth[i][0] = 2;
			labyrinth[i][top / 20 - 1] = 2;
		}
		var beginFlag = false;
		var exitFlag = false;
		var begin = {
			i: 0,
			j: 0
		};
		var exit = {
			i: 0,
			j: 0
		};
		for (i = 1; i < (top - 20) / 20; i += 1) {
			if (((Math.random() > 0.9) || (i + 2.5 > top / 20)) && (beginFlag === false)) {
				beginFlag = true;
				begin.i = 0;
				begin.j = i;
			} else {
				labyrinth[0][i] = 2;
			}
			if (((Math.random() > 0.9) || (i + 2.5 > top / 20)) && (exitFlag === false)) {
				exitFlag = true;
				exit.i = left / 20 - 1;
				exit.j = i;
			} else {
				labyrinth[left / 20 - 1][i] = 2;
			}
		}
		Controllers.createLabyrinth(left, top, begin, begin.i, begin.j, exit);
	}
};

var labyrinth = [Controllers.getWidth() - Controllers.getWidth() % 20];
var i, j;
for (i = 0; i < (Controllers.getWidth() - Controllers.getWidth() % 20) / 20; i++) {
	labyrinth[i] = [Controllers.getHeight() - Controllers.getHeight() % 20];
}

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
		Controllers.createContainer();
	}
};
