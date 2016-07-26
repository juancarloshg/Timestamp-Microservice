var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));


app.get('/:date', function(req, res, next) {
	console.log('GET received with the following date:', req.params.date)
	if (isNaN(req.params.date)) {
		var unix = Date.parse(req.params.date) /1000
	}
	else {
		var unix = Number(req.params.date)
	}

	var natural = unix ? new Date(unix*1000).toDateString() : null

	res.send({
		unix: unix || null,
		natural
	})
});

app.listen(port, function () {
  console.log('app listening on port', port);
});
