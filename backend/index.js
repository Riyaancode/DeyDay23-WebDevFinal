const express = require("express");
const cors = require("cors");
const { main } = require("./db/conn");
const userRoute = require("./router/user")
const classRoute = require("./router/class")


const app = express();
const PORT = 5005;
main();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/class", classRoute);


// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});
