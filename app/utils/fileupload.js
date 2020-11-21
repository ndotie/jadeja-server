module.exports = (req, res, next) => {
  if (req.files === null) {
    console.log("No file uploaded");
    next();
  }
  const file = req.files.picture;
  file.mv(`./public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    req.uploaded = {
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
    };
    next();
  });
};
