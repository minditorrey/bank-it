'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/item');

router.route('/')
	.get((req,  res) => {

		Item.get((err, items) => {
			if(err) {
				return res.status(400).send(err);
			}

			res.send(items);
		});
	})
	.post((req, res) => {

		Item.create(req.body, err => {
			console.log('req.body:', req.body);
			if(err) {
				console.log(err)
				return res.status(400).send(err);
			}
			res.send();
		});
	});




module.exports = router;