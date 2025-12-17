export default function handler(req,res){
    const method =req.method;

    if(method === "GET"){
        res.status(200).json({message:"get method requested"})
    }

    if(method === "POST"){
        const {name,age} = req.body;
        res.status(200).json(req.body)
    }

}