import {pool} from "../../utils/database"

export default async function handler(req,res){
    const method =req.method;
    const action =req.query.action;
    if(method === "GET"){
        if(action==="get1"){
            const{userid} =req.query
            const selectquery = `select * from "Register" where userid=$1`
            const values=[userid]
            const result= await pool.query(selectquery,values)
            res.status(200).json({user:result.rows})
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
            const insertquery = `insert into "Register" (name,email) values($2,$1)`
            const values=[email,name]
            await pool.query(insertquery,values)
            res.status(200).json(req.body);
        }
    }

    if(method === "DELETE"){
        if(action === "delete1"){
            const {userid} =req.query
            const deletequery = `delete from "Register" where userid=$1`
            const values=[userid]
            await pool.query(deletequery,values)
            res.status(200).json({message:"USER DELETED"})
        }
    }

    if(method ==="PUT"){
        if(action === "put1"){
            const {userid} = req.query
            const {name,email} = req.body
            const updatequery = `update "Register" set name=$1,email=$2 where userid=$3`
            const values = [name,email,userid]
            await pool.query(updatequery,values)
            res.status(200).json({message:"Updated sucessfully"})
        }
    }
}