export interface ResponseRESTCountries {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    cioc?:        string;
    independent?: boolean;
    status:       Status;
    unMember:     boolean;
    currencies?:  Currencies;
    idd:          Idd;
    capital?:     string[];
    altSpellings: string[];
    region:       Region;
    subregion?:   string;
    languages?:   { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms?:    Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   Continent[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    gini?:        { [key: string]: number };
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    EUR?: Aed;
    LAK?: Aed;
    CAD?: Aed;
    NGN?: Aed;
    VUV?: Aed;
    CZK?: Aed;
    MWK?: Aed;
    XOF?: Aed;
    ISK?: Aed;
    NOK?: Aed;
    XCD?: Aed;
    CLP?: Aed;
    BMD?: Aed;
    KWD?: Aed;
    USD?: Aed;
    XAF?: Aed;
    LKR?: Aed;
    CNY?: Aed;
    BDT?: Aed;
    SEK?: Aed;
    TRY?: Aed;
    GNF?: Aed;
    TZS?: Aed;
    RWF?: Aed;
    SGD?: Aed;
    MAD?: Aed;
    IQD?: Aed;
    BND?: Aed;
    GBP?: Aed;
    IMP?: Aed;
    KPW?: Aed;
    IRR?: Aed;
    ANG?: Aed;
    PYG?: Aed;
    ALL?: Aed;
    TJS?: Aed;
    BOB?: Aed;
    COP?: Aed;
    BZD?: Aed;
    MMK?: Aed;
    XPF?: Aed;
    BRL?: Aed;
    SOS?: Aed;
    AFN?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    DZD?: Aed;
    MRU?: Aed;
    ERN?: Aed;
    KHR?: Aed;
    BSD?: Aed;
    BYN?: Aed;
    AUD?: Aed;
    TVD?: Aed;
    SHP?: Aed;
    BGN?: Aed;
    MZN?: Aed;
    INR?: Aed;
    PEN?: Aed;
    BIF?: Aed;
    HNL?: Aed;
    TOP?: Aed;
    SAR?: Aed;
    SRD?: Aed;
    QAR?: Aed;
    GIP?: Aed;
    MUR?: Aed;
    BBD?: Aed;
    SYP?: Aed;
    EGP?: Aed;
    STN?: Aed;
    KID?: Aed;
    LSL?: Aed;
    ZAR?: Aed;
    SBD?: Aed;
    LYD?: Aed;
    KRW?: Aed;
    CHF?: Aed;
    NIO?: Aed;
    MVR?: Aed;
    KGS?: Aed;
    KES?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    PLN?: Aed;
    ETB?: Aed;
    BAM?: BAM;
    UYU?: Aed;
    CVE?: Aed;
    HTG?: Aed;
    YER?: Aed;
    SZL?: Aed;
    ZWL?: Aed;
    ILS?: Aed;
    FJD?: Aed;
    UAH?: Aed;
    HKD?: Aed;
    BTN?: Aed;
    NPR?: Aed;
    AED?: Aed;
    GGP?: Aed;
    DOP?: Aed;
    RSD?: Aed;
    BWP?: Aed;
    GHS?: Aed;
    KMF?: Aed;
    AZN?: Aed;
    JOD?: Aed;
    TWD?: Aed;
    DJF?: Aed;
    DKK?: Aed;
    PGK?: Aed;
    MGA?: Aed;
    HUF?: Aed;
    TTD?: Aed;
    GMD?: Aed;
    ARS?: Aed;
    CDF?: Aed;
    IDR?: Aed;
    LBP?: Aed;
    MYR?: Aed;
    KYD?: Aed;
    AMD?: Aed;
    MNT?: Aed;
    JPY?: Aed;
    PHP?: Aed;
    JMD?: Aed;
    MOP?: Aed;
    FOK?: Aed;
    GYD?: Aed;
    SDG?: BAM;
    RUB?: Aed;
    LRD?: Aed;
    MXN?: Aed;
    TND?: Aed;
    AWG?: Aed;
    KZT?: Aed;
    OMR?: Aed;
    TMT?: Aed;
    SLL?: Aed;
    WST?: Aed;
    GEL?: Aed;
    NAD?: Aed;
    SSP?: Aed;
    THB?: Aed;
    BHD?: Aed;
    FKP?: Aed;
    JEP?: Aed;
    VND?: Aed;
    GTQ?: Aed;
    MDL?: Aed;
    MKD?: Aed;
    UZS?: Aed;
    RON?: Aed;
    UGX?: Aed;
    ZMW?: Aed;
    PKR?: Aed;
    PAB?: Aed;
    AOA?: Aed;
    VES?: Aed;
    CRC?: Aed;
    SCR?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root?:     string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toResponseRESTCountries(json: string): ResponseRESTCountries[] {
        return cast(JSON.parse(json), a(r("ResponseRESTCountries")));
    }

    public static responseRESTCountriesToJson(value: ResponseRESTCountries[]): string {
        return JSON.stringify(uncast(value, a(r("ResponseRESTCountries"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "ResponseRESTCountries": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "tld", js: "tld", typ: u(undefined, a("")) },
        { json: "cca2", js: "cca2", typ: "" },
        { json: "ccn3", js: "ccn3", typ: u(undefined, "") },
        { json: "cca3", js: "cca3", typ: "" },
        { json: "cioc", js: "cioc", typ: u(undefined, "") },
        { json: "independent", js: "independent", typ: u(undefined, true) },
        { json: "status", js: "status", typ: r("Status") },
        { json: "unMember", js: "unMember", typ: true },
        { json: "currencies", js: "currencies", typ: u(undefined, r("Currencies")) },
        { json: "idd", js: "idd", typ: r("Idd") },
        { json: "capital", js: "capital", typ: u(undefined, a("")) },
        { json: "altSpellings", js: "altSpellings", typ: a("") },
        { json: "region", js: "region", typ: r("Region") },
        { json: "subregion", js: "subregion", typ: u(undefined, "") },
        { json: "languages", js: "languages", typ: u(undefined, m("")) },
        { json: "translations", js: "translations", typ: m(r("Translation")) },
        { json: "latlng", js: "latlng", typ: a(3.14) },
        { json: "landlocked", js: "landlocked", typ: true },
        { json: "borders", js: "borders", typ: u(undefined, a("")) },
        { json: "area", js: "area", typ: 3.14 },
        { json: "demonyms", js: "demonyms", typ: u(undefined, r("Demonyms")) },
        { json: "flag", js: "flag", typ: "" },
        { json: "maps", js: "maps", typ: r("Maps") },
        { json: "population", js: "population", typ: 0 },
        { json: "fifa", js: "fifa", typ: u(undefined, "") },
        { json: "car", js: "car", typ: r("Car") },
        { json: "timezones", js: "timezones", typ: a("") },
        { json: "continents", js: "continents", typ: a(r("Continent")) },
        { json: "flags", js: "flags", typ: r("Flags") },
        { json: "coatOfArms", js: "coatOfArms", typ: r("CoatOfArms") },
        { json: "startOfWeek", js: "startOfWeek", typ: r("StartOfWeek") },
        { json: "capitalInfo", js: "capitalInfo", typ: r("CapitalInfo") },
        { json: "postalCode", js: "postalCode", typ: u(undefined, r("PostalCode")) },
        { json: "gini", js: "gini", typ: u(undefined, m(3.14)) },
    ], false),
    "CapitalInfo": o([
        { json: "latlng", js: "latlng", typ: u(undefined, a(3.14)) },
    ], false),
    "Car": o([
        { json: "signs", js: "signs", typ: u(undefined, a("")) },
        { json: "side", js: "side", typ: r("Side") },
    ], false),
    "CoatOfArms": o([
        { json: "png", js: "png", typ: u(undefined, "") },
        { json: "svg", js: "svg", typ: u(undefined, "") },
    ], false),
    "Currencies": o([
        { json: "EUR", js: "EUR", typ: u(undefined, r("Aed")) },
        { json: "LAK", js: "LAK", typ: u(undefined, r("Aed")) },
        { json: "CAD", js: "CAD", typ: u(undefined, r("Aed")) },
        { json: "NGN", js: "NGN", typ: u(undefined, r("Aed")) },
        { json: "VUV", js: "VUV", typ: u(undefined, r("Aed")) },
        { json: "CZK", js: "CZK", typ: u(undefined, r("Aed")) },
        { json: "MWK", js: "MWK", typ: u(undefined, r("Aed")) },
        { json: "XOF", js: "XOF", typ: u(undefined, r("Aed")) },
        { json: "ISK", js: "ISK", typ: u(undefined, r("Aed")) },
        { json: "NOK", js: "NOK", typ: u(undefined, r("Aed")) },
        { json: "XCD", js: "XCD", typ: u(undefined, r("Aed")) },
        { json: "CLP", js: "CLP", typ: u(undefined, r("Aed")) },
        { json: "BMD", js: "BMD", typ: u(undefined, r("Aed")) },
        { json: "KWD", js: "KWD", typ: u(undefined, r("Aed")) },
        { json: "USD", js: "USD", typ: u(undefined, r("Aed")) },
        { json: "XAF", js: "XAF", typ: u(undefined, r("Aed")) },
        { json: "LKR", js: "LKR", typ: u(undefined, r("Aed")) },
        { json: "CNY", js: "CNY", typ: u(undefined, r("Aed")) },
        { json: "BDT", js: "BDT", typ: u(undefined, r("Aed")) },
        { json: "SEK", js: "SEK", typ: u(undefined, r("Aed")) },
        { json: "TRY", js: "TRY", typ: u(undefined, r("Aed")) },
        { json: "GNF", js: "GNF", typ: u(undefined, r("Aed")) },
        { json: "TZS", js: "TZS", typ: u(undefined, r("Aed")) },
        { json: "RWF", js: "RWF", typ: u(undefined, r("Aed")) },
        { json: "SGD", js: "SGD", typ: u(undefined, r("Aed")) },
        { json: "MAD", js: "MAD", typ: u(undefined, r("Aed")) },
        { json: "IQD", js: "IQD", typ: u(undefined, r("Aed")) },
        { json: "BND", js: "BND", typ: u(undefined, r("Aed")) },
        { json: "GBP", js: "GBP", typ: u(undefined, r("Aed")) },
        { json: "IMP", js: "IMP", typ: u(undefined, r("Aed")) },
        { json: "KPW", js: "KPW", typ: u(undefined, r("Aed")) },
        { json: "IRR", js: "IRR", typ: u(undefined, r("Aed")) },
        { json: "ANG", js: "ANG", typ: u(undefined, r("Aed")) },
        { json: "PYG", js: "PYG", typ: u(undefined, r("Aed")) },
        { json: "ALL", js: "ALL", typ: u(undefined, r("Aed")) },
        { json: "TJS", js: "TJS", typ: u(undefined, r("Aed")) },
        { json: "BOB", js: "BOB", typ: u(undefined, r("Aed")) },
        { json: "COP", js: "COP", typ: u(undefined, r("Aed")) },
        { json: "BZD", js: "BZD", typ: u(undefined, r("Aed")) },
        { json: "MMK", js: "MMK", typ: u(undefined, r("Aed")) },
        { json: "XPF", js: "XPF", typ: u(undefined, r("Aed")) },
        { json: "BRL", js: "BRL", typ: u(undefined, r("Aed")) },
        { json: "SOS", js: "SOS", typ: u(undefined, r("Aed")) },
        { json: "AFN", js: "AFN", typ: u(undefined, r("Aed")) },
        { json: "CKD", js: "CKD", typ: u(undefined, r("Aed")) },
        { json: "NZD", js: "NZD", typ: u(undefined, r("Aed")) },
        { json: "DZD", js: "DZD", typ: u(undefined, r("Aed")) },
        { json: "MRU", js: "MRU", typ: u(undefined, r("Aed")) },
        { json: "ERN", js: "ERN", typ: u(undefined, r("Aed")) },
        { json: "KHR", js: "KHR", typ: u(undefined, r("Aed")) },
        { json: "BSD", js: "BSD", typ: u(undefined, r("Aed")) },
        { json: "BYN", js: "BYN", typ: u(undefined, r("Aed")) },
        { json: "AUD", js: "AUD", typ: u(undefined, r("Aed")) },
        { json: "TVD", js: "TVD", typ: u(undefined, r("Aed")) },
        { json: "SHP", js: "SHP", typ: u(undefined, r("Aed")) },
        { json: "BGN", js: "BGN", typ: u(undefined, r("Aed")) },
        { json: "MZN", js: "MZN", typ: u(undefined, r("Aed")) },
        { json: "INR", js: "INR", typ: u(undefined, r("Aed")) },
        { json: "PEN", js: "PEN", typ: u(undefined, r("Aed")) },
        { json: "BIF", js: "BIF", typ: u(undefined, r("Aed")) },
        { json: "HNL", js: "HNL", typ: u(undefined, r("Aed")) },
        { json: "TOP", js: "TOP", typ: u(undefined, r("Aed")) },
        { json: "SAR", js: "SAR", typ: u(undefined, r("Aed")) },
        { json: "SRD", js: "SRD", typ: u(undefined, r("Aed")) },
        { json: "QAR", js: "QAR", typ: u(undefined, r("Aed")) },
        { json: "GIP", js: "GIP", typ: u(undefined, r("Aed")) },
        { json: "MUR", js: "MUR", typ: u(undefined, r("Aed")) },
        { json: "BBD", js: "BBD", typ: u(undefined, r("Aed")) },
        { json: "SYP", js: "SYP", typ: u(undefined, r("Aed")) },
        { json: "EGP", js: "EGP", typ: u(undefined, r("Aed")) },
        { json: "STN", js: "STN", typ: u(undefined, r("Aed")) },
        { json: "KID", js: "KID", typ: u(undefined, r("Aed")) },
        { json: "LSL", js: "LSL", typ: u(undefined, r("Aed")) },
        { json: "ZAR", js: "ZAR", typ: u(undefined, r("Aed")) },
        { json: "SBD", js: "SBD", typ: u(undefined, r("Aed")) },
        { json: "LYD", js: "LYD", typ: u(undefined, r("Aed")) },
        { json: "KRW", js: "KRW", typ: u(undefined, r("Aed")) },
        { json: "CHF", js: "CHF", typ: u(undefined, r("Aed")) },
        { json: "NIO", js: "NIO", typ: u(undefined, r("Aed")) },
        { json: "MVR", js: "MVR", typ: u(undefined, r("Aed")) },
        { json: "KGS", js: "KGS", typ: u(undefined, r("Aed")) },
        { json: "KES", js: "KES", typ: u(undefined, r("Aed")) },
        { json: "CUC", js: "CUC", typ: u(undefined, r("Aed")) },
        { json: "CUP", js: "CUP", typ: u(undefined, r("Aed")) },
        { json: "PLN", js: "PLN", typ: u(undefined, r("Aed")) },
        { json: "ETB", js: "ETB", typ: u(undefined, r("Aed")) },
        { json: "BAM", js: "BAM", typ: u(undefined, r("BAM")) },
        { json: "UYU", js: "UYU", typ: u(undefined, r("Aed")) },
        { json: "CVE", js: "CVE", typ: u(undefined, r("Aed")) },
        { json: "HTG", js: "HTG", typ: u(undefined, r("Aed")) },
        { json: "YER", js: "YER", typ: u(undefined, r("Aed")) },
        { json: "SZL", js: "SZL", typ: u(undefined, r("Aed")) },
        { json: "ZWL", js: "ZWL", typ: u(undefined, r("Aed")) },
        { json: "ILS", js: "ILS", typ: u(undefined, r("Aed")) },
        { json: "FJD", js: "FJD", typ: u(undefined, r("Aed")) },
        { json: "UAH", js: "UAH", typ: u(undefined, r("Aed")) },
        { json: "HKD", js: "HKD", typ: u(undefined, r("Aed")) },
        { json: "BTN", js: "BTN", typ: u(undefined, r("Aed")) },
        { json: "NPR", js: "NPR", typ: u(undefined, r("Aed")) },
        { json: "AED", js: "AED", typ: u(undefined, r("Aed")) },
        { json: "GGP", js: "GGP", typ: u(undefined, r("Aed")) },
        { json: "DOP", js: "DOP", typ: u(undefined, r("Aed")) },
        { json: "RSD", js: "RSD", typ: u(undefined, r("Aed")) },
        { json: "BWP", js: "BWP", typ: u(undefined, r("Aed")) },
        { json: "GHS", js: "GHS", typ: u(undefined, r("Aed")) },
        { json: "KMF", js: "KMF", typ: u(undefined, r("Aed")) },
        { json: "AZN", js: "AZN", typ: u(undefined, r("Aed")) },
        { json: "JOD", js: "JOD", typ: u(undefined, r("Aed")) },
        { json: "TWD", js: "TWD", typ: u(undefined, r("Aed")) },
        { json: "DJF", js: "DJF", typ: u(undefined, r("Aed")) },
        { json: "DKK", js: "DKK", typ: u(undefined, r("Aed")) },
        { json: "PGK", js: "PGK", typ: u(undefined, r("Aed")) },
        { json: "MGA", js: "MGA", typ: u(undefined, r("Aed")) },
        { json: "HUF", js: "HUF", typ: u(undefined, r("Aed")) },
        { json: "TTD", js: "TTD", typ: u(undefined, r("Aed")) },
        { json: "GMD", js: "GMD", typ: u(undefined, r("Aed")) },
        { json: "ARS", js: "ARS", typ: u(undefined, r("Aed")) },
        { json: "CDF", js: "CDF", typ: u(undefined, r("Aed")) },
        { json: "IDR", js: "IDR", typ: u(undefined, r("Aed")) },
        { json: "LBP", js: "LBP", typ: u(undefined, r("Aed")) },
        { json: "MYR", js: "MYR", typ: u(undefined, r("Aed")) },
        { json: "KYD", js: "KYD", typ: u(undefined, r("Aed")) },
        { json: "AMD", js: "AMD", typ: u(undefined, r("Aed")) },
        { json: "MNT", js: "MNT", typ: u(undefined, r("Aed")) },
        { json: "JPY", js: "JPY", typ: u(undefined, r("Aed")) },
        { json: "PHP", js: "PHP", typ: u(undefined, r("Aed")) },
        { json: "JMD", js: "JMD", typ: u(undefined, r("Aed")) },
        { json: "MOP", js: "MOP", typ: u(undefined, r("Aed")) },
        { json: "FOK", js: "FOK", typ: u(undefined, r("Aed")) },
        { json: "GYD", js: "GYD", typ: u(undefined, r("Aed")) },
        { json: "SDG", js: "SDG", typ: u(undefined, r("BAM")) },
        { json: "RUB", js: "RUB", typ: u(undefined, r("Aed")) },
        { json: "LRD", js: "LRD", typ: u(undefined, r("Aed")) },
        { json: "MXN", js: "MXN", typ: u(undefined, r("Aed")) },
        { json: "TND", js: "TND", typ: u(undefined, r("Aed")) },
        { json: "AWG", js: "AWG", typ: u(undefined, r("Aed")) },
        { json: "KZT", js: "KZT", typ: u(undefined, r("Aed")) },
        { json: "OMR", js: "OMR", typ: u(undefined, r("Aed")) },
        { json: "TMT", js: "TMT", typ: u(undefined, r("Aed")) },
        { json: "SLL", js: "SLL", typ: u(undefined, r("Aed")) },
        { json: "WST", js: "WST", typ: u(undefined, r("Aed")) },
        { json: "GEL", js: "GEL", typ: u(undefined, r("Aed")) },
        { json: "NAD", js: "NAD", typ: u(undefined, r("Aed")) },
        { json: "SSP", js: "SSP", typ: u(undefined, r("Aed")) },
        { json: "THB", js: "THB", typ: u(undefined, r("Aed")) },
        { json: "BHD", js: "BHD", typ: u(undefined, r("Aed")) },
        { json: "FKP", js: "FKP", typ: u(undefined, r("Aed")) },
        { json: "JEP", js: "JEP", typ: u(undefined, r("Aed")) },
        { json: "VND", js: "VND", typ: u(undefined, r("Aed")) },
        { json: "GTQ", js: "GTQ", typ: u(undefined, r("Aed")) },
        { json: "MDL", js: "MDL", typ: u(undefined, r("Aed")) },
        { json: "MKD", js: "MKD", typ: u(undefined, r("Aed")) },
        { json: "UZS", js: "UZS", typ: u(undefined, r("Aed")) },
        { json: "RON", js: "RON", typ: u(undefined, r("Aed")) },
        { json: "UGX", js: "UGX", typ: u(undefined, r("Aed")) },
        { json: "ZMW", js: "ZMW", typ: u(undefined, r("Aed")) },
        { json: "PKR", js: "PKR", typ: u(undefined, r("Aed")) },
        { json: "PAB", js: "PAB", typ: u(undefined, r("Aed")) },
        { json: "AOA", js: "AOA", typ: u(undefined, r("Aed")) },
        { json: "VES", js: "VES", typ: u(undefined, r("Aed")) },
        { json: "CRC", js: "CRC", typ: u(undefined, r("Aed")) },
        { json: "SCR", js: "SCR", typ: u(undefined, r("Aed")) },
    ], false),
    "Aed": o([
        { json: "name", js: "name", typ: "" },
        { json: "symbol", js: "symbol", typ: "" },
    ], false),
    "BAM": o([
        { json: "name", js: "name", typ: "" },
    ], false),
    "Demonyms": o([
        { json: "eng", js: "eng", typ: r("Eng") },
        { json: "fra", js: "fra", typ: u(undefined, r("Eng")) },
    ], false),
    "Eng": o([
        { json: "f", js: "f", typ: "" },
        { json: "m", js: "m", typ: "" },
    ], false),
    "Flags": o([
        { json: "png", js: "png", typ: "" },
        { json: "svg", js: "svg", typ: "" },
        { json: "alt", js: "alt", typ: u(undefined, "") },
    ], false),
    "Idd": o([
        { json: "root", js: "root", typ: u(undefined, "") },
        { json: "suffixes", js: "suffixes", typ: u(undefined, a("")) },
    ], false),
    "Maps": o([
        { json: "googleMaps", js: "googleMaps", typ: "" },
        { json: "openStreetMaps", js: "openStreetMaps", typ: "" },
    ], false),
    "Name": o([
        { json: "common", js: "common", typ: "" },
        { json: "official", js: "official", typ: "" },
        { json: "nativeName", js: "nativeName", typ: u(undefined, m(r("Translation"))) },
    ], false),
    "Translation": o([
        { json: "official", js: "official", typ: "" },
        { json: "common", js: "common", typ: "" },
    ], false),
    "PostalCode": o([
        { json: "format", js: "format", typ: "" },
        { json: "regex", js: "regex", typ: u(undefined, "") },
    ], false),
    "Side": [
        "left",
        "right",
    ],
    "Continent": [
        "Africa",
        "Antarctica",
        "Asia",
        "Europe",
        "North America",
        "Oceania",
        "South America",
    ],
    "Region": [
        "Africa",
        "Americas",
        "Antarctic",
        "Asia",
        "Europe",
        "Oceania",
    ],
    "StartOfWeek": [
        "monday",
        "saturday",
        "sunday",
    ],
    "Status": [
        "officially-assigned",
        "user-assigned",
    ],
};
