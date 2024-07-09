const express = require('express');
const fs = require('fs');
const path = require('path');
const upload = require('./config/multerconfig');
const { uploadImages } = require('./controllers/uploadcontroller');
const errorHandler = require('./utils/errorhandler');

const app = express();
const PORT = process.env.PORT || 3000;

// Create uploads directory if it does not exist
const dir = path.join(__dirname, 'uploads');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// API endpoint for multiple image uploads
app.post('/upload', upload.array('images'), uploadImages);

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
