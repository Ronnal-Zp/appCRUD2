import { Router } from "express";
import { getAllCountries, getCountryByCode, getCountryByName } from "../controllers/restcountrie";

const router = Router();


router.get("/all", [ ], getAllCountries);

router.get("/name/:name", [ ], getCountryByName);

router.get("/alpha/:code", [ ], getCountryByCode);



export default router;