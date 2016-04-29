'use strict';

var db = require('../config/db');

db.run(`CREATE TABLE IF NOT EXISTS items (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	date DATETIME,
	description TEXT,
	debits INTEGER,
	credits INTEGER
	)`);

exports.get = function(cb){
	db.all('SELECT * FROM items', cb);
};

exports.create = function(item, cb) {

	if(!item.date || !item.description) {
		return cb('Missing required field.')
	}
	
	db.run('INSERT INTO items (date, description, debits, credits) VALUES (?, ?, ?, ?)',
	item.date, 
	item.description, 
	item.debits, 
	item.credits, 
	cb);

};

