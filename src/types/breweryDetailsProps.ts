import { Brewery } from "./brewery";

export interface BreweryDetailsProps {
    listOfBreweries: Brewery[],
    setSearch: (search: string[]) => void,
}