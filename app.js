const express = require('express');
const dotenv = require("dotenv")
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

dotenv.config({ path: './config.env' });
PORT = 5000;

app.use(express.urlencoded({
    extended: true
}));


const userRouter = require('./routes/User');
app.use('/',userRouter);


    app.use(express.static("frontend/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })



app.listen(PORT, () => {
    console.log(`connected to database, app listening on port ${PORT}`);
});
