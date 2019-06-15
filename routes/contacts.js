const express = require('express');
const router = express.Router();

// @route GET api/contacts
// @desc  get all users contact
// @access  Public
router.get('/', (req, res) => {
  res.send('get all contacts');
});

// @route post api/contacts
// @desc  add new contact
// @access  private
router.post('/', (req, res) => {
  res.send('Add  contact');
});

// @route PUT api/contacts/:id
// @desc  Update contact
// @access  private
router.put('/:id', (req, res) => {
  res.send('update  contact');
});

// @route DELETE api/contacts/:id
// @desc  Delete contact
// @access  private
router.delete('/:id', (req, res) => {
  res.send('Delete  contact');
});

module.exports = router;
