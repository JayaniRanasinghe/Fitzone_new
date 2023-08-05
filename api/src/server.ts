import express from 'express';
import bodyParser from 'body-parser';
import homeRoutes from './routes/home';
import membersRoutes from "./routes/members";
import trainerRoutes from "./routes/trainer";
const cors = require("cors"); 

const app = express();

app.use(cors());

// const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', homeRoutes);
app.use("/users", membersRoutes);
app.use('/trainer/',trainerRoutes)

app.listen(8081, () =>{
    console.log('server is running on port 8081.');
}) 

