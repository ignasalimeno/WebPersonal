const express = require("express");
const UserController = require("../controllers/user");
const UserServices = require("../services/user");

const api = express.Router();

api.post("/login", UserController.login);
api.post("/user", UserController.getUserByUsername);

api.get("/users",UserController.getUsers);

module.exports = api;
