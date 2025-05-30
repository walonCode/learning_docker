import express, { response } from "express"
import { MongoClient } from "mongodb"

const app = express()

app.use(express.json())

app.get("/", async(req,res) => {
	res.send("hello world")
})

const getUser = async() => {
    const uri = "mongodb://admin:password@localhost:5000"
    const client = new MongoClient(uri)

    try{
        await client.connect()
        const db = client.db("user-account")

        const result = await db.collection("users").find({}).toArray()
        return result
    }catch(error){
        console.error("error connecting to mongodb: ",error)
    }finally{
        await client.close()
    }
}

const insertUser = async(name,password) => {
    const uri = "mongodb://admin:password@localhost:5000"
    const client = new MongoClient(uri)

    try{
        await client.connect()
        const db = client.db("user-account")

        const result = await db.collection("users").insertOne({"name":name, "password":password})
        return result
    }catch(error){
        console.error("error connecting to mongodb: ",error)
    }finally{
        await client.close()
    }
}

app.post("/user", async(req,res) => {
    try{
        const { name,password } = req.body
        const user = await insertUser(name,password) || []
        console.log(user)
        return res.status(200).json({message:"added"})
    }catch(err){
        console.error(err)
    }
})

app.get("/user", async(req,res) => {
    try{
        const user = await getUser()
        return res.status(200).json(user)
    }catch(err){
        console.error(err)
    }
})

app.listen(3000, () => {
	console.log("server is running on port 3000")
})
