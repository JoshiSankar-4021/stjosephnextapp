import {pool} from "../../utils/database"

export default async function handler(req,res){
    const method =req.method;
    const action =req.query.action;
    if(method === "GET"){
        if(action==="get1"){
            res.status(200).json({message:"get method requested"})
        }else if(action === "get2"){
            res.status(200).json({message:"get method requested2"})
        }
        
    }

    if(method === "POST"){
        if(action === "post1"){
        const {name,age} = req.body;
        res.status(200).json(req.body)
        }
        if(action === "post2"){
            const {name,email} = req.body;
            const insertquery = `insert into "Register" (name,email) values($1,$2)`
            const values=[name,email]
            await pool.query(insertquery,values)
            res.status(200).json(req.body);
            
        }

    }

    

}