const FormModel = require("../models/formModel");

exports.createForm = (req, res) => {
  FormModel.createForm(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId });
  });
};

exports.getForm = (req, res) => {
  FormModel.getFormById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send(result[0]);
  });
};
