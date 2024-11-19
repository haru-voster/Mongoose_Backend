import express from "express"
import cors from "cors"
import { connectDB } from './config/db.js';
import saleRouter from "./routes/saleRoute.js";

//app config
const app = express()
const port = process.env.PORT || 4000;

//exceeding limit
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
//middleware
app.use(express.json({ limit: '50mb' }))
app.use(cors())
//db connection
connectDB();

//API ENDS POINT
app.use("/api/sale", saleRouter)
app.use('/images', express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
//