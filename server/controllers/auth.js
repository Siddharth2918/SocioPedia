import Users from "../models/users"


// for registeration
export const register = async(req, res)=>{
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

    }catch(err){

    }
}

