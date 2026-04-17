exports.chatbotReply = (req,res)=>{

const message = req.body.message.toLowerCase();

let reply = "Please describe your legal problem.";

if(message.includes("divorce")){
reply = "You can file divorce under Hindu Marriage Act 1955. Required documents include marriage certificate and identity proof.";
}

else if(message.includes("domestic violence")){
reply = "You can file complaint under Domestic Violence Act 2005. Contact protection officer or police.";
}

else if(message.includes("alimony")){
reply = "You can apply for maintenance under Section 125 CrPC.";
}

res.json({reply});
};