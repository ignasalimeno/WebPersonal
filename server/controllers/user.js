const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
  const myUser = new User();

  //console.log(req.body);

  myUser.email = req.body.email;
  myUser.role = "admin";
  myUser.active = true;

  if (!req.body.password1 || !req.body.password2) {
    res.status(404).send({ message: "Las constraseñas son obligatorias" });
  } else {
    if (checkPasswords(req.body.password1, req.body.password2)) {
      bcrypt.hash(req.body.password1, null, null, function(err, hash) {
        if (err) {
          res.status(500).send({ message: "Error al encriptar" });
        } else {
          myUser.password = hash;

          myUser.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "No se pudo guardar en la BD" });
            } else {
              res.status(200).send({ user: userStored });
            }
          });
        }
      });
    } else {
      res.status(404).send({ message: "Las contraseñas no coinciden" });
    }
  }

  console.log(myUser.email);
}

function checkPasswords(pass1, pass2) {
  if (pass1 == pass2) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signUp
};
