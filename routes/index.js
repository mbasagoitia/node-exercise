const express = require("express");
const employeeRouter = require("./employees.routes");
const productRouter = require("./products.routes");

// TODO: import router from users.route

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

const userRouter = require("./users.route.js");

router.use("/users", userRouter);
router.use("/employees", employeeRouter);
router.use("/products", productRouter);

module.exports = router;