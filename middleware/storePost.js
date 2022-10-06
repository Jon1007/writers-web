
module.exports = (req, res, next) => {
  if (
    !(req.files && req.files.image) ||
    !req.body.description ||
    !req.body.title ||
    !req.body.content
  ) {
    return res.redirect("/posts/new");
  }
  next();
};
 