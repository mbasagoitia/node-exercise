const express = require("express");
const router = require("./routes/index.js");
// TODO: import router from routes/

const app = express();

app.use(express.json());
app.use("/api", router);

// TODO: use the imported router to handle all requests

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000...`);
});
