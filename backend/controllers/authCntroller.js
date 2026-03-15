import supabase from "../config/supabase.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async(req,res)=>{

const {name,email,password} = req.body;

const hash = await bcrypt.hash(password,10);

const {data,error} = await supabase
.from("users")
.insert([{name,email,password:hash,balance:10000}])
.select();

if(error){
return res.json(error)
}

res.json({message:"User created",user:data})

}

export const login = async(req,res)=>{

const {email,password} = req.body;

const {data} = await supabase
.from("users")
.select("*")
.eq("email",email)
.single();

if(!data){
return res.json({message:"User not found"})
}

const match = await bcrypt.compare(password,data.password);

if(!match){
return res.json({message:"Wrong password"})
}

const token = jwt.sign(
{id:data.id,email:data.email},
process.env.JWT_SECRET
);

res.json({token})

}