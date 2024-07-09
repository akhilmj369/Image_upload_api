const uploadImages = (req, res) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
  
    const fileNames = req.files.map(file => file.filename);
    res.status(200).send({
      message: 'Files uploaded successfully',
      files: fileNames
    });
  };
  
  module.exports = { uploadImages };
  