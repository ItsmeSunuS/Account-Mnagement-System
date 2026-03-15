import jwt from "jsonwebtoken"
export const verifyToken=(req,res,next)=>{
    const token=req.headers.authorization;
    if(!token)
        return res.status(401).json({message:"Token required"})
}
try{
    const decodced=jwt.verify(token,process.env.JWT_SCRET);
    req.user=decoded;
    next()

}catch(err){
    res.status(401).json({message:"Invalid Token"})
}
