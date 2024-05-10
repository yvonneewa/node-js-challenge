
// Import express and call the Router method
const express = require('express');
const router = express.Router();

// Import modules for tips/feedback
const tipsRoutes = require('./tipsRoutes');
const feedbackRoutes = require('./feedbackRoutes'); // Assuming you have a separate file for feedback routes

// Use our routes
router.use('/api/tips', tipsRoutes);
router.use('/api/feedback', feedbackRoutes);

// Export app
module.exports = router;
