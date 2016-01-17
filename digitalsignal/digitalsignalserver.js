var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port: 3000});

wss.on('connection', function(ws) {
	ws.send('connected');

	setInterval(function(){
   	 checkTime(ws) },
	1000);
});

function checkTime(ws) {
	var signal = randomIntFromInterval(0,1);
    ws.send(signal.toString());
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}


