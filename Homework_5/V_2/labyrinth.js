var $ = $;
var Selecters = {
	container: ".container",
	men: ".men"
};

var Utils = {
	getHeight: function () {
		return $(window).height();
	}, // Посмотреть можно ли переделать под get / set
	getWidth: function () {
		return $(window).width();
	},
	createCube: function (left, top) {
		var cube = $("<div></div>");
		$(cube).css("left", left); //Закешировать
		$(cube).css("top", top);
		$(".container").append(cube);
	},

	zeroMatrix: function () {
		var i;
		var j;
		for (i = 0; i < Data.width / 20; i++) {
			for (j = 0; j < Data.height / 20; j++) {
				Data.labyrinth[i][j] = 0;
			}
		}
	},

	createContainer: function () {
		Utils.createMatrix(); //this
		Utils.zeroMatrix();
		$(".container").css("height", Data.height); //Закешировать контейнер
		$(".container").css("width", Data.width);
		$(".container").css("margin-left", (-Data.width / 2));
		$(".container").css("margin-top", (-Data.height / 2));

		Utils.createBorderWall(Data.width, Data.height); //this
		Utils.drawLabyrinth(Data.width, Data.height);
	},

	drawLabyrinth: function () {
		var i;
		var j;
		for (i = 0; i < Data.width / 20; i++) {
			for (j = 0; j < Data.height / 20; j++) {
				if (Data.labyrinth[i][j] !== 1) {
					Utils.createCube(i * 20, j * 20);
				}
			}
		}
	},

	createLabyrinth: function (i, j) {
		Data.labyrinth[i][j] = 1;
		for (var k = 0; k < 20; k++) {
			var direction = Math.random();
			if (direction < 0.4) { // Нормальный else if
				if ((i + 1 < Data.width / 20) && (Data.labyrinth[i + 1][j] === 0)) {
					Utils.goAhead(i, j);
					Utils.createLabyrinth(i + 1, j);
				}
			} else {
				if (direction < 0.65) {
					if ((j - 1 > 1) && (Data.labyrinth[i][j - 1] === 0)) {
						Utils.goUp (i, j);
						Utils.createLabyrinth(i, j - 1);
					}
				} else {
					if (direction < 0.8) {
						if ((j + 1 < Data.height / 20) && (Data.labyrinth[i][j + 1] === 0)) {
							Utils.goDown (i, j);
							Utils.createLabyrinth(i, j + 1);
						} else {
							if ((i - 1 > 1) && (Data.labyrinth[i - 1][j] === 0)) {
								Utils.goBack (i, j);
								Utils.createLabyrinth(i - 1, j);
							}
						}
					}
				}
			}
		}
		if ((i === Data.begin.i) && (j === Data.begin.j)) {
			Utils.createMen(); //this
			Utils.drawLabyrinth();
		}
	},

	goAhead: function (i, j) {
		console.log("head");
		console.log(i);
		console.log(j);

		// Закешировать Data.exit

		if ((Math.random() > 0.4) && ((i !== Data.exit.i) || (j + 1 !== Data.exit.j)) && (Data.labyrinth[i][j + 1] === 0)) {
			Data.labyrinth[i][j + 1] = 2;
		}
		if ((Math.random() > 0.4) && ((i !== Data.exit.i) && (j - 1 !== Data.exit.j)) && (Data.labyrinth[i][j - 1] === 0)) {
			Data.labyrinth[i][j - 1] = 2;
		}
		if ((i - 1 > 0) && (Math.random() > 0.4) && ((i - 1 !== Data.exit.i) && (j !== Data.exit.j)) && (Data.labyrinth[i - 1][j] === 0)) {
			Data.labyrinth[i - 1][j] = 2;
		}
		if ((i - 1 > 0) && (Math.random() > 0.4) && ((i - 1 !== Data.exit.i) && (j - 1 !== Data.exit.j)) && (Data.labyrinth[i - 1][j - 1] === 0)) {
			Data.labyrinth[i - 1][j - 1] = 2;
		}
		if ((i - 1 > 0) && (Math.random() > 0.4) && ((i - 1 !== Data.exit.i) && (j + 1 !== Data.exit.j)) && (Data.labyrinth[i - 1][j + 1] === 0)) {
			Data.labyrinth[i - 1][j + 1] = 2;
		}
	},

	goBack: function (i, j) {

		// Закешировать Data.exit

		if ((Math.random() > 0.4) && ((i !== Data.exit.i) || (j + 1 !== Data.exit.j)) && (Data.labyrinth[i][j + 1] === 0)) {
			Data.labyrinth[i][j + 1] = 2;
		}
		if ((Math.random() > 0.4) && ((i !== Data.exit.i) || (j - 1 !== Data.exit.j)) && (Data.labyrinth[i][j - 1] === 0)) {
			Data.labyrinth[i][j - 1] = 2;
		}
		if ((i + 1 > 0) && (Math.random() > 0.4) && ((i + 1 !== Data.exit.i) && (j - 1 !== Data.exit.j)) && (Data.labyrinth[i + 1][j - 1] === 0)) {
			Data.labyrinth[i + 1][j] = 2;
		}
		if ((i > 0) && (Math.random() > 0.4) && ((i !== Data.exit.i) && (j - 1 !== Data.exit.j)) && (Data.labyrinth[i][j - 1] === 0)) {
			Data.labyrinth[i][j - 1] = 2;
		}
		if ((i - 1 > 0) && (Math.random() > 0.4) && ((i - 1 !== Data.exit.i) && (j - 1 !== Data.exit.j)) && (Data.labyrinth[i - 1][j - 1] === 0)) {
			Data.labyrinth[i - 1][j - 1] = 2;
		}
	},

	goUp: function (i, j) {

		// Закешировать Data.exit

		if ((Math.random() > 0.4) && ((i + 1 !== Data.exit.i) || (j !== Data.exit.j)) && (Data.labyrinth[i + 1][j + 1] === 0)) {
			Data.labyrinth[i + 1][j - 1] = 2;
		}
		if ((Math.random() > 0.4) && ((i + 1 !== Data.exit.i) || (j !== Data.exit.j)) && (Data.labyrinth[i + 1][j + 1] === 0)) {
			Data.labyrinth[i + 1][j] = 2;
		}
		if ((i + 1 > 0) && (Math.random() > 0.4) && ((i + 1 !== Data.exit.i) && (j + 1 !== Data.exit.j)) && (Data.labyrinth[i - 1][j + 1] === 0)) {
			Data.labyrinth[i + 1][j + 1] = 2;
		}
		if ((i - 1 > 0) && (Math.random() > 0.4) && ((i - 1 !== Data.exit.i) && (j + 1 !== Data.exit.j)) && (Data.labyrinth[i - 1][j + 1] === 0)) {
			Data.labyrinth[i - 1][j + 1] = 2;
		}
		if ((i > 0) && (Math.random() > 0.4) && ((i !== Data.exit.i) && (j + 1 !== Data.exit.j)) && (Data.labyrinth[i][j + 1] === 0)) {
			Data.labyrinth[i][j + 1] = 2;
		}
	},

	goDown: function (i, j) {

		// Закешировать Data.exit

		if ((Math.random() > 0.4) && ((i + 1 !== Data.exit.i) || (j !== Data.exit.j)) && (Data.labyrinth[i + 1][j] === 0)) {
			Data.labyrinth[i + 1][j] = 2;
		}
		if ((Math.random() > 0.4) && ((i - 1 !== Data.exit.i) || (j !== Data.exit.j)) && (Data.labyrinth[i - 1][j] === 0)) {
			Data.labyrinth[i - 1][j] = 2;
		}
		if ((i - 1 > 0) && (Math.random() > 0.4) && ((i - 1 !== Data.exit.i) && (j !== Data.exit.j)) && (Data.labyrinth[i - 1][j] === 0)) {
			Data.labyrinth[i - 1][j] = 2;
		}
		if ((i - 1 > 0) && (Math.random() > 0.4) && ((i - 1 !== Data.exit.i) && (j - 1 !== Data.exit.j)) && (Data.labyrinth[i - 1][j - 1] === 0)) {
			Data.labyrinth[i - 1][j - 1] = 2;
		}
	},

	createMen: function () {
		$(Selecters.men).css("left", Data.begin.i * 20); //Закешеривать $(Selecters.men)
		$(Selecters.men).css("top", Data.begin.j * 20);
	},

	createBorderWall: function () {
		// Закешировать переменные типо Data.width, используемые более 1 раза

		var i;
		for (i = 0; i < Data.width / 20; i += 1) {
			Data.labyrinth[i][0] = 2;
			Data.labyrinth[i][Data.height / 20 - 1] = 2;
		}
		var beginFlag = false;
		var exitFlag = false;
		for (i = 1; i < (Data.height - 20) / 20; i += 1) {
			if (((Math.random() > 0.9) || (i + 2.5 > Data.height / 20)) && (beginFlag === false)) {
				beginFlag = true;
				Data.begin.i = 0;
				Data.begin.j = i;
			} else {
				Data.labyrinth[0][i] = 2;
			}
			if (((Math.random() > 0.9) || (i + 2.5 > Data.height / 20)) && (exitFlag === false)) {
				exitFlag = true;
				Data.exit.i = Data.width / 20 - 1;
				Data.exit.j = i;
				Data.labyrinth[Data.exit.i][Data.exit.j] = 1;
			} else {
				Data.labyrinth[Data.width / 20 - 1][i] = 2;
			}
		}
		Utils.createLabyrinth(Data.begin.i, Data.begin.j); //this
	},
	createMatrix: function () {
		var i;
		for (i = 0; i < (Utils.getWidth() - Utils.getWidth() % 20) / 20; i++) {
			Data.labyrinth[i] = [Utils.getHeight() - Utils.getHeight() % 20]; // this
		}
	}
};

var Controllers = {
	moveMenY: function (shift) {
		return function () {
			var men = $(Selecters.men);
			var top = parseInt(men.css("top"), 10);
			var left = parseInt(men.css("left"), 10);
			if (Data.labyrinth[left / 20][(top / 20 + shift / 20)] === 1) {
				top = shift + top;
				men.css("top", top);
				if ((left / 20 === Data.exit.i) && (top / 20 === Data.exit.j)) {
					alert("Вы победили!!! \n" + Data.counterStep + " нажатий\nУ вас было:" + Data.counterLive + " попыток");
				}
			} else {
				Data.counterLive++;
				men.css("left", Data.begin.i * 20);
				men.css("top", Data.begin.j * 20);
			}
		};
	},

	moveMenX: function (shift) {
		return function () {
			var men = $(Selecters.men);
			var left = parseInt(men.css("left"), 10);
			var top = parseInt(men.css("top"), 10);
			if (Data.labyrinth[left / 20 + shift / 20][top / 20] === 1) {
				left = shift + left;
				men.css("left", left);
				if ((left / 20 === Data.exit.i) && (top / 20 === Data.exit.j)) {
					alert("Вы победили!!! \n" + Data.counterStep + " нажатий\nУ вас было:" + Data.counterLive + " попыток");
				}
			} else {
				Data.counterLive++;
				men.css("left", Data.begin.i * 20);
				men.css("top", Data.begin.j * 20);
			}
		};
	},

	pressKeyboard: function (event) {
		Data.counterStep++;
		if ((event.which === 119) || (event.which === 87) || (event.which === 1094) || (event.which === 1062)) {
			Controllers.moveMenY(-20)();
		} else if ((event.which === 115) || (event.which === 83) || (event.which === 1099) || (event.which === 1067)) {
				Controllers.moveMenY(20)();
		} else if ((event.which === 97) || (event.which === 65) || (event.which === 1092) || (event.which === 1060)) {
			Controllers.moveMenX(-20)();
		} else if ((event.which === 100) || (event.which === 68) || (event.which === 1074) || (event.which === 1042)) {
			Controllers.moveMenX(20)();
		}
	}, //Лишняя запятая
};

var Data = { // Сделать метод init в котором устанавливать Utils.getWidth() - Utils.getWidth() % 20
	labyrinth: [Utils.getWidth() - Utils.getWidth() % 20],
	sizeCube: 20,
	width: Utils.getWidth() - Utils.getWidth() % 20,
	height: Utils.getHeight() - Utils.getHeight() % 20,
	begin: {
		i: 0,
		j: 0
	},
	exit: {
		i: 0,
		j: 0
	},
	counterStep: 0,
	counterLive: 0
};

var Events = {
	subscribe: function () {
		$("body").on("keypress", Controllers.pressKeyboard);
	},
	unsubscribe: function () {
		$("body").off("keypress");
	}
};

var View = {
	init: function () {
		Utils.createContainer(); //Методы отрисовки вынести во View
		Events.subscribe();
	}
};
