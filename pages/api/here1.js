export default function handler(req,res){
    const method= req.method;
    const action= req.query.action;

    if(method==="POST"){
        if(action === "register"){
            res.status(200).json({message:"this is register post"})
        }else if(action === "login"){
            res.status(200).json({message:"this is login post"})     
        }
    }
}