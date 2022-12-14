import { formatCityState, capitalizeFirstLetter, formatAddress, formatPhone } from "./helperFunctions";
import {expect, describe, it} from 'vitest';

const data = {
    "street": "1201 Old Bastrop Hwy Bldg A",
    "postal_code": "78742-2600",
    "state": "Texas",
    "city": "Austin",
    "country": "United States",
    "phone": "5123825264",
    "name": "Hi Sign Brewing",
    "website_url": "http://www.hisignbrewing.com",
    "latitude": null,
    "longitude": null,
    "brewery_type": "micro",
    "id": "hi-sign-brewing-austin"
  }

describe('formatCityState', () => {
    it('should take a city and state in the form of [city, state] and return an array with uppercase [city, state]', () => {
        const formatted = formatCityState(['austin', 'Texas'])

        expect(formatted).toEqual(['Austin', 'Texas'])
    })

    it('should take a city and state in the form of [CITY, StAtE] and return an array with uppercase [City, State]', () => {
        const formatted = formatCityState(['AUSTIN', 'TeXaS'])

        expect(formatted).toEqual(['Austin', 'Texas'])
    })

    it('should not be effected by numberes', () => {
        const formatted = formatCityState(['AUST1N', '2eXaS'])
        
        expect(formatted).toEqual(['Aust1n', '2exas'])
    })
    
})
describe('formatAddress', () => {
    it('should take inputs and return a formatted address like "677 Heron Spur, Canyon Mountain, Texas, 12345"', () => {
        const overwrite = {postal_code: '78742'};
        const testData = {...data, ...overwrite}
        const {street, state, postal_code, city} = testData
        const formattedAddress = formatAddress(street, state, postal_code, city)

        expect(formattedAddress).toBe('1201 Old Bastrop Hwy Bldg A, Austin, Texas, 78742')
    })

    it('should correctly format full postal-code (78742-2600) to be 5 digits only (78742)', () => {
        const {street, state, postal_code, city} = data
        const formattedAddress = formatAddress(street, state, postal_code, city)

        expect(formattedAddress).toBe('1201 Old Bastrop Hwy Bldg A, Austin, Texas, 78742')
    })
    
    it('should handle null state passing into the function', () => {
        const overwrite = {state: null};
        const testData = {...data, ...overwrite}
        const {street, state, postal_code, city} = testData
        const formattedAddress = formatAddress(street, state, postal_code, city)
    
        expect(formattedAddress).toBe('1201 Old Bastrop Hwy Bldg A, Austin, Texas, 78742')
    })

    it('should handle null street passing into the function', () => {
        const overwrite = {street: null};
        const testData = {...data, ...overwrite}
        const {street, state, postal_code, city} = testData
        const formattedAddress = formatAddress(street, state, postal_code, city)
    
        expect(formattedAddress).toBe('Austin, Texas, 78742')
    })

    it('should handle null postal passing into the function', () => {
        const overwrite = {postal_code: null};
        const testData = {...data, ...overwrite}
        const {street, state, postal_code, city} = testData
        const formattedAddress = formatAddress(street, state, postal_code, city)
    
        expect(formattedAddress).toBe('1201 Old Bastrop Hwy Bldg A, Austin, Texas')
    })
    
})

describe('formatPhone', () => {
    
    it('should format 10 or 11 digit phone number in format of (123) 456-7899', () => {
        const {phone} = data
        const longerPhone = '1' + phone;

        const formattedPhone = formatPhone(phone)
        const sameFormattedPhone = formatPhone(longerPhone)
        
        expect(formattedPhone).toBe('(512) 382-5264')
        expect(sameFormattedPhone).toBe('(512) 382-5264')
    })

    it('should format phone numbers with special digits', () => {
        const formattedPhone = formatPhone('(512) 382-5264')
        
        expect(formattedPhone).toBe('(512) 382-5264')
    })
})

describe('capitalizeFirstLetter', () => {
    it('should capitolize the first letter of any word', () => {
        const capitalizedWord = capitalizeFirstLetter('texas')

        expect(capitalizedWord).toBe('Texas');
    })
})