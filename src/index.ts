import express from "express";
import cors from "cors";

import sequelize from "./Database/config";
import userRouter from "./modules/users/routes/user";
import authRouter from "./modules/auth/routes/auth";

const app = express();
const basePath = "/api/v1"


app.use(cors());
app.use(express.json());

main();

app.use(`${basePath}`, userRouter);
app.use(`${basePath}/auth`, authRouter);



app.listen(3000, () => {
    console.log('Listen in 3000');
})



async function main() {

    try {
        
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('DB CONNECTED!!')

    } catch (error) {
        console.log(error)
    }

}





