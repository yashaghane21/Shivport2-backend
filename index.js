const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors= require("cors")
const userrouter = require("./routers/Usert")


app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false);
var mongoDB = "mongodb+srv://bytedevs2121:FoUR3y9ie4PKPjU2@cluster0.oaifhaa.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("coonection succsess");
}).catch((e) => {
    console.log(e);
});


app.use('/api',userrouter);




app.listen(5000, () => {
    console.log("jii");
})