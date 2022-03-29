var number;

function getTemperatura() {
	$.getJSON("https://api.thingspeak.com/channels/1682678/fields/1.json?api_key=QSOG2LWOO4NED4LB&results=1",
		function(json) {
			console.log(json.feeds[0]);
			$('#resultado').text(JSON.stringify(json.feeds[0].field1));
		}
	);
}

function enviarTemperatura() {
	var number = document.getElementById("mytext").value;
	console.log(number);
	$.getJSON("https://api.thingspeak.com/update?api_key=50I0UPRG9W1LVPB8&field1="+number);
}