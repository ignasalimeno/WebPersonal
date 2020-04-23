//NO SE USA

// const pool = require("../utils/connectDB")
// const userModel = require("../models/user")

// const getUserByUsername = async (req, res) => {
//     const username = req.body.username;
//     const results = await pool.query(`SELECT * FROM Users WHERE username = '${username}'`);
//     console.log(results);
//     return true;
// };

// const getUsers = async (req, res) => {
//     //console.log(req.body);
//     const response = await pool.query("Select * from users");
//     res.status(200).json(response.rows);
//   };

// module.exports = {
//     getUserByUsername,
//     getUsers
// };