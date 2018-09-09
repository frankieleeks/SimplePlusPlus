var fs = require("fs");
var detailsFile = "./localfiles/details.json";
var details = require(__dirname + "/../../spp_modules/userDetails");
var xss = require("xss");

module.exports = function(req, res) {
  var name = details.name;
  var age = xss(req.body.age);
  var height = xss(req.body.userheight);

  details.updateAge(age);
  details.updateHeight(height);

  var obj = { name: name, age: age, height: height };
  console.log(obj)
  fs.writeFileSync(detailsFile, JSON.stringify(obj));
  res.redirect("/firstaid");
};
