var express = require('express');
var router = express.Router();
var Images = require('../models/images');

/* POST - Create a new image. */
router.post('/add', function(req, res, next) {

	var image = new Images();
	image.url = req.body.url;
	image.tags = req.body.tags;
	image.description = req.body.description;

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
router.get('/all', function(req, res, next) {


	Image.find(function(err, images){
		if(err){
			console.log(err);
			res.status(500).json({status:'failure'});
		}
		else{
			res.json({status:'success', data:images});
		}
	});
});

module.exports = router;
