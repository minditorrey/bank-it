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

		Item.create(req.body, (err, item) => {
			if(err) {
				console.log(err)
				return res.status(400).send(err);
			}
			res.send(item);
		})
	})
router.route('/:id')
	.delete((req, res) => {

		Item.remove(req.params.id, function(err, item) {
			if(err) {
				return res.status(400).send(err);
			}
			console.log('delete item:', item);
			res.send(item);

		})
	});




module.exports = router;