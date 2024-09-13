const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const userRouter = require("./routes/user");
const pumpkinPiesRouter = require("./routes/pumpkinPies");

app.use("/users", userRouter);
app.use("/pumpkinpies", pumpkinPiesRouter);

const uri = "mongodb+srv://Moe:Mamakadia@cluster0.skekizd.mongodb.net/pumpkinpies?retryWrites=true&w=majority&appName=Cluster0";

async function connectDb() {
    try {
        await mongoose.connect(uri);
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.log("Error: " + error);
    }
}

connectDb();

app.listen(PORT, () => {
    console.log(`Express API: localhost:${PORT}`);
});
