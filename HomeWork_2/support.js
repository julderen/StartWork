var $ = $;
var result = {
	nameEmail: "",
	text: ""
};

$("#buttonStyle").click(function (event) {
	event.preventDefault();
	result.nameEmail = $("#forIntput").val();
	result.text = $("#label").val();
	console.log(result.text);
	console.log(result.nameEmail);
	alert(JSON.stringify(result));
});
