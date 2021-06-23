const express = require('express');
const cors = require('cors');
const env = require("dotenv")

env.config({ path: "./env/config.env" })
const app = express();
app.use(express.json())
const corsOptions = {
    origin: "*"
}
app.use(cors(corsOptions));
const port = process.env.PORT || 6000;
// app.use((req, res, next) => {
//     if (req.method !== "POST") {
//         return res.status(400).json({ status: "false", result: "Only Post request allowed" })
//     }
//     next()

// });
app.get("/", (req, res, next) => {
    res.status(200).send("server is up")
})
app.use("/", require("./routes/routes"))


app.listen(port, () => {
    console.log(`Server running on PORT:${port}`)
})


