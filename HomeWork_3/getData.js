createScript("parse.json");

function createScript(url) {
	var script = document.createElement("script");
	script.setAttribute("src", url);
	$("body")[0].appendChild(script);
}
	
function formUserInfo(data) {
	var info = " Меня зовут " + data.name + ". Любимый цвет " + data.color;
	createStringInfo(info, data.indexColor);
}

function createStringInfo(info, textColor) {
	var string = document.createElement("p");
	string.style.color = textColor;
	$(string).append(info);
	$(".container")[0].appendChild(string);
}