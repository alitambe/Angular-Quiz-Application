let express = require("express");
let db = require("./Config/dbConfig");
let customerRouter = require("./Router/CustomerRouter");
let userRouter =  require("./Router/userRouter");
let app = express();
//db.connect(); //Connect the database
const port = process.env.PORT || 9090;
app.use(express.json());



app.use("/api/customer",customerRouter);
app.use("/api/user",userRouter);

app.listen(port,()=>console.log(`Application running on port number ${port}`));
