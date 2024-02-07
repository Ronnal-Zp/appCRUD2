import { Request, Response } from "express";
import { getAllCountriesService, getCountriesByCodeService, getCountriesByNameService } from "../../../services/restcountries";

export const getAllCountries = async (req:Request, res:Response) => {

    const dataCountries = await getAllCountriesService();

    if(!dataCountries) {
        return res.json({
            msg: "ERROR"
        })    
    }

    return res.json({
        msg: "OK",
        data: dataCountries
    })
}


export const getCountryByName = async (req:Request, res:Response) => {

    const { name } = req.params;
    const dataCountries = await getCountriesByNameService(name);

    if(!dataCountries) {
        return res.json({
            msg: "ERROR"
        })    
    }

    return res.json({
        msg: "OK",
        data: dataCountries
    })
}



export const getCountryByCode = async (req:Request, res:Response) => {
    const { code } = req.params;
    const dataCountries = await getCountriesByCodeService(code);

    if(!dataCountries) {
        return res.json({
            msg: "ERROR"
        })    
    }

    return res.json({
        msg: "OK",
        data: dataCountries
    })
}

