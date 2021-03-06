import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(JSON.stringify(req.headers, null, 2));
});

app.listen(port, () => console.log(`Server started on ${port}`));
