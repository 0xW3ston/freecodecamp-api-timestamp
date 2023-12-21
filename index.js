const express = require("express");
const app = express();
const api_routes = require("./api");

app.use(express.json())
app.use("/api", api_routes);

app.listen(80,() => {
    console.log("Up and running on port 80");
})