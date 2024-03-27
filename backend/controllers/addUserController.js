const AddUser = require('../models/addUserModel');
const mongoose = require('mongoose');

// Get all Addusers
const getAddUsers = async (req, res) => {
  try {
    const Addusers = await User.find();
    res.status(200).json(Addusers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user by ID
const getAddUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid Adduser ID' });
    }
    const Adduser = await AddUser.findById(id);
    if (!Adduser) {
      return res.status(404).json({ error: 'AddUser not found' });
    }
    res.status(200).json(Adduser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new Adduser
const createAddUser = async (req, res) => {
  const { firstName, lastName, email, addressLine1, addressLine2, contact, role, password } = req.body;
  try {
    const Adduser = await AddUser.create({ firstName, lastName, email, addressLine1, addressLine2, contact, role, password });
    res.status(201).json(Adduser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Adduser by ID
const deleteAddUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid Adduser ID' });
    }
    const Adduser = await AddUser.findByIdAndDelete(id);
    if (!Adduser) {
      return res.status(404).json({ error: 'AddUser not found' });
    }
    res.status(200).json(Adduser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Adduser by ID
const updateAddUser = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid Adduser ID' });
    }
    const Adduser = await AddUser.findByIdAndUpdate(id, updateData, { new: true });
    if (!Adduser) {
      return res.status(404).json({ error: 'AddUser not found' });
    }
    res.status(200).json(Adduser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAddUsers,
  getAddUser,
  createAddUser,
  deleteAddUser,
  updateAddUser
};
