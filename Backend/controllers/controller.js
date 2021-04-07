const db = require("../models.js");

//get all bookings
const Tutorial = db.tutorials;exports.getAll = (req, res) => {
  let sql = 'SELECT * FROM bookings'
  db.query(sql, (err, result) =>{
    if (err) throw err;
    res.status(200).send(result);
  });
};

// Create new booking
exports.create = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const date = req.body.formatedDate;
  const time = req.body.formatedTime;

  let sql = 'INSERT INTO bookings (name, email, date, time) VALUES (?,?,?,?); ';
  db.query(sql, [name, email, date, time], (err, result, fields)=> {
    if (err) throw err;
    let newId=result.insertId;
    sql = `SELECT * FROM bookings WHERE id = ${newId}` ;
    db.query(sql, (err, result, fields)=> {
      if (err) throw err;
      res.status(201).send(result);
    });
    
  });
};

// Delete booking
exports.delete = (req, res) => {
    const id = req.params.id;
    let sql = `DELETE FROM bookings WHERE id = ${id}` ;
    db.query(sql, (err, result, fields)=> {
      if (err) throw err;
      res.status(200).send(result);
    });
};

exports.questions = (req, res) => {
  res.status(200).send("test");
};