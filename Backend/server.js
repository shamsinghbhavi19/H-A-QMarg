const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const chatbotRoutes = require("./routes/chatbot");
const casesRoutes = require("./routes/cases");
const petitionRoutes = require("./routes/petition");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/chatbot", chatbotRoutes);
app.use("/cases", casesRoutes);
app.use("/petition", petitionRoutes);

app.get("/", (req,res)=>{
    res.send("H-A-Q Marg Backend Running");
});

const PORT = 5000;

app.listen(PORT,()=>{
    console.log("Server running on port",PORT);
});