import { Brewery } from "./brewery";

export interface BDProps {
    listOfBreweries: Brewery[],
    cityState: string[],
    setSearch: (search: string[]) => void,
}