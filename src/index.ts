import express from "express";
import cors    from "cors";
import multer  from "multer";

import sequelize from "./Database/config";
import userRouter from "./modules/users/routes/user";
import authRouter from "./modules/auth/routes/auth";
import restCountriesRouter from "./modules/restcountries/routes/restcountrie";
import { getIdUserFromToken } from "./modules/middlewares/validateJWT";



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: async function (req, file, cb) {
        const idUser = await getIdUserFromToken(req);

        const extension = file.mimetype.split('/')[1];
        cb(null, idUser +'.'+ extension)
    }
})


const app = express();
const basePath = "/api/v1"
const upload = multer({ storage: storage })


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(upload.any());

main();

app.use(`${basePath}`, userRouter);
app.use(`${basePath}/auth`, authRouter);
app.use(`${basePath}/restcountries`, restCountriesRouter);



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


// pondra 8 mas que sea 🤥


