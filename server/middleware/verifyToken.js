import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next)=>{
    try{
        let token = req.header("Authorization");

        if(!token){
            return res.status(400).json({message: "Access Denied"});
        }
        if(token.startsWith("Bearer ")){
            token = token.splice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.jwtSecret);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

export default verifyToken;