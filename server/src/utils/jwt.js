const jwt= require('jwt-simple');
const moment = require("moment");
const { SECRET_KEY } = require('../../config')

exports.createAccessToken = (user) => {
    const payload = {
        user_id: user.user_id,
        username: user.username,
        role: user.role,  
        active: user.active,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    };

    return jwt.encode(payload, SECRET_KEY);
}

exports.createRefreshToken = (user) => {
    const payload = {
        user_id: user.user_id,
        exp: moment().add(30, "days").unix()
    };

    return jwt.encode(payload, SECRET_KEY);
}

exports.decodeToken = (token) =>{
    return jwt.decode(token, SECRET_KEY, true)
}