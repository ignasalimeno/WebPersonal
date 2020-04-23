const pool = require("../utils/connectDB");
const bcrypt = require("bcrypt-nodejs");
const user = require("../models/user");
const jwt = require("../utils/jwt");

const login = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  //Valido que vengan las dos contraseñas
  if (!password) {
    res.status(404).send({ message: "La constraseña es obligatorias" });
  } else {
    //Voy a buscar el usuario a la BD
    const results = await pool.query(
      `SELECT * FROM Users WHERE username = '${username}'`
    );

    if (results.rowCount > 0) {
      if (req.body.password == results.rows[0].password) {
        console.log("Contraseña ok");

        if (results.rows[0].active) {
          const user = {
            user_id: results.rows[0].user_id,
            username: results.rows[0].username,
            role: results.rows[0].role,
            active: true,
          };
          // res.status(200).send({
          //   accessToken: jwt.createAccessToken(user),
          //   refreshToken: jwt.createRefreshToken(user),
          // });
          res.status(200).send("todo ok");
        } else {
          res.status(404).send("El usuario no está activo");
        }
      } else {
        console.log("contraseña error");
        res.status(404).send("La contraseña es incorrecta");
      }
    } else {
      res.status(404).send("El usuario no existe");
    }
  }
};

const getUserByUsername = async (req, res) => {
  const username = req.body.username;
  const results = await pool.query(
    `SELECT * FROM Users WHERE username = '${username}'`
  );
  res.status(200).json(results.rows);
};

const getUsers = async (req, res) => {
  const response = await pool.query("Select * from users");
  res.status(200).json(response.rows);
};

module.exports = {
  login,
  getUserByUsername,
  getUsers,
};
