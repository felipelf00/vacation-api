const express = require("express");
const serverless = require("serverless-http");
const connectDB = require("./db");
const Plan = require("./models/Plan");
const { connect } = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

router = express.Router();

// router.get("/", (req, res) => {
//   res.json({
//     hello: "hi",
//   });
// });

// Create a new plan
app.post("/plans", async (req, res) => {
  try {
    const plan = new Plan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/plans", async (req, res) => {
  try {
    const plans = await Plan.find({});
    res.json(plans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/plans/:id", async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/plans/:id", async (req, res) => {
  try {
    const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json(plan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/plans/:id", async (req, res) => {
  try {
    const plan = await Plan.findByIdAndDelete(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }
    res.json({ message: "Plan deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.use("/.netlify/functions/api", router);

module.exports = app;
module.exports.handler = serverless(app);
