import { BASE_PATH_RESTCOUNTRIES } from "../environments/env"
import { ResponseRESTCountries } from "../modules/interfaces/restcountries"

export const getAllCountriesService = async () => {
    try {
        const data = await fetch(`${BASE_PATH_RESTCOUNTRIES}/all`);
        const datajson = await data.json() as ResponseRESTCountries[];

        const countries = datajson.map((data) => ({ official: data.name.official, status: data.status, currencies: data.currencies, capital: data.capital, flag: data.flag, continents: data.continents }))
        
        return countries;
    } catch (error) {
        return false;
    }
}


export const getCountriesByNameService = async(name = '') => {
    try {
        const data = await fetch(`${BASE_PATH_RESTCOUNTRIES}/name/${name}`);
        const datajson = await data.json() as ResponseRESTCountries[];


        const countries = datajson.map((data) => ({ official: data.name.official, status: data.status, capital: data.capital, region: data.region, subregion: data.subregion, languages: data.languages }))
        
        return countries;

    } catch (error) {
        return false;
    }
}


export const getCountriesByCodeService = async(code = '') => {
    try {
        const data = await fetch(`${BASE_PATH_RESTCOUNTRIES}/alpha/${code}`);
        const datajson = await data.json() as ResponseRESTCountries[];

        const countries = datajson.map((data) => ({ official: data.name.official, status: data.status, capital: data.capital, population: data.population, flags: data.flags, postalCode: data.postalCode}))
        
        return countries;
    } catch (error) {
        return false;
    }
}


