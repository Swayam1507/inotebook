var jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) => {

    const token = req.header("auth-token");
    // console.log(localStorage.getItem("token"))
    // console.log("yey",token)
    
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    
    try {
        const decoded = jwt.verify(token, 'shhhhh');
    // console.log(decoded)
    // res.send(decoded)
        req.user = decoded.user
        next();
    } catch (error) {
        res.status(402).send({ error: "Please authenticate using a valid token" })
    }
}
module.exports = fetchuser