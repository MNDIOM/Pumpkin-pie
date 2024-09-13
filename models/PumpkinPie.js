const mongoose = require("mongoose");

const pumpkinPieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    bakeTime: {
        type: Number, // in minutes
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    }
});

const PumpkinPie = mongoose.model("PumpkinPie", pumpkinPieSchema);

module.exports = PumpkinPie;
