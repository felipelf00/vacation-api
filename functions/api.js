const express = require("express");
const serverless = require("serverless-http");
const connectDB = require("../src/db");
const Plan = require("../src/models/Plan");
// const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(cors());

connectDB();

router = express.Router();

router.get("/", (req, res) => {
  // res.json({
  //   hello: "hi there",
  // });
  res.send("Hello, weelcome to the API");
});

// Create a new plan
router.post("/plans", async (req, res) => {
  try {
    const plan = new Plan(req.body);
    await plan.save();
    res.status(201).json(plan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/plans", async (req, res) => {
  try {
    const plans = await Plan.find({});
    res.json(plans);
    // res.json({
    //   hello: "hi plans",
    // });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/plans/:id", async (req, res) => {
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

router.put("/plans/:id", async (req, res) => {
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

router.delete("/plans/:id", async (req, res) => {
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);
