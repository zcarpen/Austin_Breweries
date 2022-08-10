import { Brewery } from "./brewery";

export interface BDProps {
    listOfBreweries: Brewery[],
    setSearch: (search: string[]) => void,
}