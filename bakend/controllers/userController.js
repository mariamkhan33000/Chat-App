import { genrateTokenAndCookies } from "../lib/utils/genrateToken.js";
import User from "../models/userModels.js";
import bcrypt from 'bcryptjs'

export const SignUp = async (req, res) => {
    const {fullName, email, password, confirmPassword} = req.body;
    try {
        if(password !== confirmPassword) {
            return res.status(400).json({error: "Password do not match"})
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long." });
          }
          
        const user = await User.findOne({ email })
        if(user) {
            return res.status(400).json({ error : "User already registered"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await new User({
            fullName,
            email,
            password : hashPassword
        })
        newUser.save()
        if(newUser) {
            genrateTokenAndCookies(newUser._id, res)
            res.status(200).json({ message : "User Created Successfully",
                user: {
                    _id: newUser._id,
                    fullName: newUser.fullName,
                    email: newUser.email
                }
            })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error : "Internal Server Error"})
    }
}

export const LogIn = async (req, res) => {
    try {
        const {email , password} = req.body
        const user = await User.findOne({ email })
        const isMatch = await bcrypt.compare(password, user.password)
        if(!user || !isMatch) {
            return res.status(400).json({error: "Invalid user email or password "})
        }
        genrateTokenAndCookies(user._id, res)
        res.status(200).json({ message : "User Login Successfully", user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email
        }})
    } catch (error) {
        
    }
}

export const LogOut = async (req, res) => {
    try {
        res.clearCookie("jwt")
        res.status(201).json({message: "User LogOut Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Ineterval Logout Server"})
    }
} 