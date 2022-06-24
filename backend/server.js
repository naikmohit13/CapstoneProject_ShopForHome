const express  = require ('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require("path");
const cors = require("cors");

const userRoutes = require('./routes/UserRoutes')
const AdminRoutes = require('./routes/AdminRoutes')
const CategoryRoutes = require('./routes/categories')
const ProductRoutes = require('./routes/Product')
const CartRoutes = require('./routes/Cart')

mongoose.connect('mongodb://127.0.0.1:27017/shop_for_home',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("Database Connection Established!")
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port  = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})

// app.use('/api/user',UserRoute)
app.get('/', (req,res,next) => {
        res.status(200).json({
            message: "Hello from server!"
        })
})

app.use(cors());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use('/api',userRoutes)
app.use('/api',AdminRoutes)
app.use('/api',CategoryRoutes)
app.use('/api',ProductRoutes)
app.use('/api',CartRoutes)


