const express = require("express");
const router = express.Router();
const PumpkinPie = require("../models/PumpkinPie");


router.get("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let foundPumpkinPie = await PumpkinPie.findById(id);
        if (!foundPumpkinPie) {
            return res.status(404).send("Pumpkin Pie not found");
        }
        res.status(200).send(foundPumpkinPie);
    } catch (error) {
        console.log("Error: " + error);
        res.status(400).send(error);
    }
});


router.post("/", async (req, res) => {
    try {
        const { name, ingredients, bakeTime, servings } = req.body;
        const newPumpkinPie = new PumpkinPie({ name, ingredients, bakeTime, servings });
        await newPumpkinPie.save();
        res.status(201).send(newPumpkinPie);
    } catch (error) {
        console.log("Error: " + error);
        res.status(400).send(error);
    }
});

// Delete a pumpkin pie by ID
router.delete("/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let result = await PumpkinPie.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send("Pumpkin Pie not found");
        }
        res.status(200).send("Pumpkin Pie deleted successfully");
    } catch (error) {
        console.log("Error: " + error);
        res.status(400).send(error);
    }
});

module.exports = router;
