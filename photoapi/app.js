//var routes = require("./routes/routes.js")(app);

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var routes = require('./routes/routes');

var app = express();
var config = require('./config/main');
var mongoose = require('mongoose');

// Connect to database
var db = mongoose.connect(config.database, function(err) {
	if (err) {
		console.error('\x1b[31m', 'Could not connect to MongoDB!');
		console.log(err);
	}

	});


//mongoose.connect(config.database);
var server = app.listen(7000, function () {
    console.log("Listening on port %s...", server.address().port);
});


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
var Images = require('./models/images');

/* POST - Create a new image. */
app.post('/add', function(req, res, next) {

	var image = new Images();
	image.url = req.body.url;
	image.tags = req.body.tag;
	image.description = req.body.description;
  image.thumbUrl=req.body.thumbUrl;

	image.save(function(err){
		if(err){
			console.log(err);
			res.status(500).json({status:'failure'});
		}
		else{
			res.json({status:'success', data:image});
		}
	});
});

/* GET - list of all teams. */
app.get('/all', function(req, res, next) {

	Images.find(function(err, images){
		if(err){
			console.log(err);
			res.status(500).json({status:'failure'});
		}
		else{
			res.send({status:'success', data:images});
		}
	});
});

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports = app;
