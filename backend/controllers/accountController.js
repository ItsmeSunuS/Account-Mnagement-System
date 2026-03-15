import supabase from "../config/supabase.js";

export const getBalance = async(req,res)=>{

const {data} = await supabase
.from("users")
.select("balance")
.eq("id",req.user.id)
.single();

res.json(data)

}

export const transferMoney = async(req,res)=>{

const {receiverEmail,amount} = req.body;

const senderId = req.user.id;

const {data:sender} = await supabase
.from("users")
.select("*")
.eq("id",senderId)
.single();

if(sender.balance < amount){
return res.json({message:"Insufficient balance"})
}

const {data:receiver} = await supabase
.from("users")
.select("*")
.eq("email",receiverEmail)
.single();

if(!receiver){
return res.json({message:"Receiver not found"})
}

await supabase
.from("users")
.update({balance:sender.balance - amount})
.eq("id",senderId);

await supabase
.from("users")
.update({balance:receiver.balance + amount})
.eq("id",receiver.id);

await supabase.from("transactions").insert([
{
sender:senderId,
receiver:receiver.id,
amount,
type:"debit"
},
{
sender:senderId,
receiver:receiver.id,
amount,
type:"credit"
}
])

res.json({message:"Transfer successful"})

}

export const getStatement = async(req,res)=>{

const {data} = await supabase
.from("transactions")
.select("*")
.or(`sender.eq.${req.user.id},receiver.eq.${req.user.id}`);

res.json(data)

}