import Users from "../models/users.js"
import jwt from 'jsonwebtoken';

const jwtSecret = "123456";
// for registeration
export const register = async (req, res)=>{
    try{
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        const exists = await Users.findOne({email: email});
        if(exists){
            return res.status(211).json({message: `User with email ${email} already exists.`});
        }
        const newUser = new Users({
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile : Math.floor(Math.random() * 10000),
            impressions : Math.floor(Math.random() * 10000),
        });
        
        const saveUser = await newUser.save();

        res.status(201).json(saveUser);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}




// For loggin in
export const login = async (req, res)=>{
    try{
        const { 
            email,
            password,
        } = req.body;
        const existingUser = await Users.findOne({email: email});
        if(!existingUser){
            return res.status(400).json({message: "User with the email does not exists!"});
        }
        if(existingUser.password != password){
            return res.status(400).json({message: "Incorrect Password"});
        }

        let token = jwt.sign({id: existingUser._id}, jwtSecret);
        res.status(200).json({token, existingUser});
    }catch(err){
        res.status(400).json({error: err.message})
    }
}

