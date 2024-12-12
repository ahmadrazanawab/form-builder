const db = require('./db/db');

exports.createForm = (data, callback) => {
  db.query('INSERT INTO forms SET ?', data, callback);
};

exports.getFormById = (id, callback) => {
  db.query('SELECT * FROM forms WHERE id = ?', [id], callback);
};
