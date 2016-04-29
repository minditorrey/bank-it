'use strict';

var db = require('../config/db');

db.run(`CREATE TABLE IF NOT EXISTS items (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	date DATETIME,
	description TEXT,
	debit INTEGER,
	credit INTEGER
	)`);

exports.get = function(cb){
	db.all('SELECT * FROM items', cb);
};

exports.create = function(item, cb) {
	console.log(item)
	if(!item.description) {
		return cb('Missing required field.')
	}
	
	db.run('INSERT INTO items (date, description, debit, credit) VALUES (?, ?, ?, ?)',
	item.date, 
	item.description, 
	item.debit, 
	item.credit, 
	cb);

};

