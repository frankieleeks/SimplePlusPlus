var fs = require('fs');
var detailsFile = './localfiles/details.json';
var db = require(__dirname + '/../../spp_modules/dbconnect');
var dbUser = db.user;

module.exports = function (req, res) {
    var name = req.body.username;
    var age = req.body.age;
    var height = req.body.userheight;

    // dbUser({
    //     name: name,
    //     age: age,
    //     height: height
    // }).save(function (err) {
    //     if (err) throw err;
    //     console.log('user saved')
    // });
    var obj = { name: name, age: age, height: height };
    //console.log(obj)
    fs.writeFileSync(detailsFile, JSON.stringify(obj));
    res.redirect('/firstaid');
}