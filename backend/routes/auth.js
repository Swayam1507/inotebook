const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");

let success = false

router.post("/createuser",
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        try {
            let user = await User.findOne({ email: req.body.email })
            console.log(user)
            if (user) {
                return res.status(400).send("user with this email already exists")
            }
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            var salt = bcrypt.genSaltSync(10);
            var secPass = bcrypt.hashSync(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })
            // console.log(user.id)
            data = {
                user: {
                    id: user.id
                }
            }
            var token = jwt.sign(data, 'shhhhh');
            res.send({ token })
        } catch (err) {
            res.send(err.message)
        }
    })


router.post("/login",
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        try {
            let user = await User.findOne({ email: req.body.email })
            // console.log(user)
            if (!user) {
                success=false
                return res.status(400).json({ success, error: "invalid credentials1" })
            }
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                success=false
                return res.status(400).json({ success, errors: errors.array() });
            }
            var salt = bcrypt.genSaltSync(10);
            var secPass = bcrypt.hashSync(req.body.password, salt);
            const checkPassword = await bcrypt.compare(req.body.password, user.password)
            // const checkPassword = bcrypt.compare(secPass, user.password)
            // console.log(checkPassword)
            if (!checkPassword) {
                success=false
                return res.status(400).json({ success, error: "invalid credentials2" });
            }

            // console.log(user.id)
            data = {
                user: {
                    id: user.id
                }
            }
            var token = jwt.sign(data, 'shhhhh');
            success = true
            res.send({ success, token })
        } catch (err) {
            res.send(err.message)
        }
    })

router.post("/getuser", fetchuser, async (req, res) => {
    try {

        const userID = req.user.id
        const user = await User.findById(userID)
        res.send(user)
        // console.log(req.user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router