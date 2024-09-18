
require('dotenv').config(); 
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const userRouter = require("./routes/user");
const pumpkinPiesRouter = require("./routes/pumpkinPies");

app.use("/users", userRouter);
app.use("/pumpkinpies", pumpkinPiesRouter);

const uri = process.env.MONGODB_URI;

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
