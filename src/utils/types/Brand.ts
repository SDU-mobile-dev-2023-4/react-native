import z from "zod";

/**
 * The make for the car manifacture
 *
 * @Example
 * Audi
 * Mercedes
 * VW
 */
export enum Brand {
    Ferrari = "Ferrari",
    Mercedes = "Mercedes",
    Lamborghini = "Lamborghini",
    Bentley = "Bentley",
    RollsRoyce = "Rolls Royce",
    Tesla = "Tesla",
    BMW = "BMW",
    Audi = "Audi",
    Porsche = "Porsche",
    Volkswagen = "Volkswagen",
    Ford = "Ford",
    Chevrolet = "Chevrolet",
    Toyota = "Toyota",
    Honda = "Honda",
    Nissan = "Nissan",
    Hyundai = "Hyundai",
    Kia = "Kia",
    Mazda = "Mazda",
    Subaru = "Subaru",
    Suzuki = "Suzuki",
    Mitsubishi = "Mitsubishi",
    Dodge = "Dodge",
    Chrysler = "Chrysler",
    Jeep = "Jeep",
    Ram = "Ram",
    Volvo = "Volvo",
    Mini = "Mini",
    Fiat = "Fiat",
    AlfaRomeo = "Alfa Romeo",
    Acura = "Acura",
    Infiniti = "Infiniti",
    McLaren = "McLaren",
    Genesis = "Genesis",
    Buick = "Buick",
    Cadillac = "Cadillac",
    Lincoln = "Lincoln",
    LandRover = "Land Rover",
    Jaguar = "Jaguar",
    Lexus = "Lexus",
    Maserati = "Maserati",
    GMC = "GMC",
    Polestar = "Polestar",
    Scion = "Scion",
    Smart = "Smart",
    Saturn = "Saturn",
    Pontiac = "Pontiac",
    Hummer = "Hummer",
    Oldsmobile = "Oldsmobile",
    Mercury = "Mercury",
    Isuzu = "Isuzu",
    Daewoo = "Daewoo",
    Geo = "Geo",
    Eagle = "Eagle",
    AMGeneral = "AM General",
    Abarth = "Abarth",
    AC = "AC",
    Aixam = "Aixam",
    Alpina = "Alpina",
    LockheedMartin = "Lockheed Martin",
    ExtraterrestrialTech = "Extraterrestrial Tech",
}

/**
 * Zod schema for a Brand
 */
export const BrandSchema = z.nativeEnum(Brand);
