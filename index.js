// créer un instance de l'objet express
const express = require("express")
const app = express()
const cors = require('cors')

// Pour pouvoir lire les fichiers au formats json
app.use(express.json())
app.use(cors())


const db = require("./models") 

//Routers 
const userRouter = require("./routes/Users")
app.use("/auth",userRouter); 

db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
    console.log("Server is running on port 3001");
})
})

