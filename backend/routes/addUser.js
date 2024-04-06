const express = require('express');
const {
  createAddUser,
  getAddUsers,
  getAddUser,
  deleteAddUser,
  updateAddUser
} = require('../controllers/addUserController');

const requireAuth = require('../middleware/requireAuth'); // Uncomment this line to import requireAuth middleware

const router = express.Router();

// Require authentication for all user routes
router.use(requireAuth)

// GET all users
router.get('/', getAddUsers)

// GET a single user by ID
router.get('/:id', getAddUser)

// POST a new user
router.post('/', createAddUser)

// DELETE a user by ID
router.delete('/:id', deleteAddUser)

// UPDATE a user by ID
router.patch('/:id', updateAddUser)

module.exports = router;
