
const FORM = require('../model/form-model');
const formValidator = {
    title: {
      notEmpty: {
        errorMessage: 'Title is required'
      }
    },
      'inputs.*.formType': {
        notEmpty: {
          errorMessage: 'Input type is required'
        },
        isIn: {
          options: [['text', 'email', 'password', 'number', 'date']],
          errorMessage: 'Invalid input type'
        }
      },
      'inputs.*.label': {
        notEmpty: {
          errorMessage: 'Input label is required'
        }
      },
      'inputs.*.placeholder': {
        notEmpty: {
            errorMessage: 'Input placeholder is required'
          }
      },
      'inputs.*.order': {
        isInt: {
          errorMessage: 'Order must be an integer'
        }
      }
  };
  
  module.exports = formValidator;
