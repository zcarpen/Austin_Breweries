import { Brewery } from "./brewery";

export interface BDProps {
    listOfBreweries: Brewery[],
    cityState: string[],
    handleDetailLoad: (search: string) => void,
}