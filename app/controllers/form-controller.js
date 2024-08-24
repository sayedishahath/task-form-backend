const FORM = require('../model/form-model');
const { validationResult } = require('express-validator');
const formCtrl = {}

formCtrl.getAll =  async (req, res) => {
    try {
      const forms = await FORM.find();
      res.json(forms);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  formCtrl.create= async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const newForm = new FORM(req.body);
  
    try {
      const savedForm = await newForm.save();
      res.status(201).json(savedForm);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  formCtrl.getOne = async (req, res) => {
    try {
      const form = await FORM.findById(req.params.id);
      if (!form) return res.status(404).json({ message: 'Form not found' });
      res.json(form);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  formCtrl.edit = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    try {
      const form = await FORM.findById(req.params.id);
      if (!form) return res.status(404).json({ message: 'Form not found' });
      const { title, inputs, description } = req.body;
      form.title = title || form.title;
      form.inputs = inputs || form.inputs;
      form.description = description || form.description;
      const updatedForm = await form.save();
      res.json(updatedForm);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  formCtrl.delete = async (req, res) => {
    try {
      const form = await FORM.findByIdAndDelete(req.params.id);
      res.json({form, message: 'Form deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
module.exports = formCtrl