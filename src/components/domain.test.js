import { filterBasedOfUrlParam, filterCountriesList, getFullNamesArrayOfBorderCountries, formatString, getCountriesData } from './domain';

  const testData = [
        {name: 'Poland', capital: 'Warsaw', borders: ['BLR', 'DEU'], region: 'Europe', alpha3Code: "POL"},
        {name: 'Afghanistan', capital: 'Tokio', borders: ['CHN', 'UZB'], region: 'Asia', alpha3Code: "AFG"},
        {name: 'United States of America', capital: 'Washington', borders: ['CAN', 'MEX'],region: 'Americas', alpha3Code: "USA"},
        {name: 'Germany', capital: 'Berlin', borders: ['POL', 'BEL'], region: 'Europe', alpha3Code: "DEU"},
        {name: 'Belarus', capital: 'Minsk', borders: ['LVA', 'LTU'], region: 'Europe', alpha3Code: "BEL"}
    ];
// global.fetch = jest.fn(()=> {
//     Promise.resolve({
//         json: () => {
//           return  Promise.resolve(
//                 [{'name': 'Afghanistan', 'alpha2Code': 'AF'}, {'name': 'Poland', 'alpha2Code': 'PL'}]
//             )
//         }
//     })
// })

describe('Filter countries based on the Url path', ()=> {

    it("Should filter the countries list based on the path",()=>{
        // arrange
        const testPathname = "/Poland";
        // act
        const filteredCountry = filterBasedOfUrlParam(testPathname, testData);
        // assert
        expect(filteredCountry).toEqual([{name: 'Poland', capital: 'Warsaw', borders: ['BLR', 'DEU'], region: 'Europe', alpha3Code: "POL"}]);
    });

    it("Should return an empty array when the pathname does not match any country", ()=>{
        // arrange
        const testPathname = "/totallyBrokenPathname";
        // act
        const filteredCountry = filterBasedOfUrlParam(testPathname, testData);
        // assert
        expect(filteredCountry).toEqual([]);
    });

})

describe('Filter countries based on the input value and dropdown value', ()=> {

    let regionSelectDropdownValue= '';
    let inputValue = '';

    it('Should return the whole list if the dropdown value is equal to "All"', ()=> {
        // arrange
        regionSelectDropdownValue = 'All';
        // act
        const filteredCountry = filterCountriesList(testData, regionSelectDropdownValue, inputValue);
        // assert
        expect(filteredCountry).toEqual(testData);
    });

    it('Should return only countries with the matching region',  ()=> {
        // arrange
        const expectedResult = [ 
            {name: 'Poland', capital: 'Warsaw', borders: ['BLR', 'DEU'], region: 'Europe', alpha3Code: "POL"},
            {name: 'Germany', capital: 'Berlin', borders: ['POL', 'BEL'], region: 'Europe', alpha3Code: "DEU"},
            {name: 'Belarus', capital: 'Minsk', borders: ['LVA', 'LTU'], region: 'Europe', alpha3Code: "BEL"}
        ];
        regionSelectDropdownValue = 'Europe';
        // act
        const filteredCountry = filterCountriesList(testData, regionSelectDropdownValue, inputValue);
        // assert
        expect(filteredCountry).toEqual(expectedResult); // this can be refactored with every
    });

    it('Should filter the values based on the regionSelectDropdown value as well as the input value', ()=> {
        // arrange
        const expectedResult = [ 
            {name: 'Germany', capital: 'Berlin', borders: ['POL', 'BEL'], region: 'Europe', alpha3Code: "DEU"}
        ];
        regionSelectDropdownValue = 'Europe';
        inputValue = 'ger';
        // act
        const filteredCountry = filterCountriesList(testData, regionSelectDropdownValue, inputValue);
        // assert
         expect(filteredCountry).toEqual(expectedResult);
    });

    it('Should return an empty array if the combination of region dropdown value and input value do not match any country', ()=> {
        // arrange
        const expectedResult = [];
        inputValue = 'afghanistan';
        regionSelectDropdownValue = 'Europe';
        // act
        const filteredCountryNoMatch = filterCountriesList(testData, regionSelectDropdownValue, inputValue);
        // assert
        expect(filteredCountryNoMatch).toEqual(expectedResult);
    });

})

describe('Create the array of border countries with full names instead of shorter codes like "POL", "GER", etc', ()=> {
    
    it('Should return the proper array with full countries names', ()=> {
         // arrange
        const selectedCountry = {name: 'Germany', capital: 'Berlin', borders: ['POL', 'BEL'], region: 'Europe', alpha3Code: "DEU"};    
        const expectedResult = ['Poland', 'Belarus'];
        // act
        const borderCountriesArrayWithFullNames = getFullNamesArrayOfBorderCountries(selectedCountry, testData);
        // assert
        expect(borderCountriesArrayWithFullNames).toEqual(expectedResult);
    })

});

describe('Should make the string lowercase and should replace all spaces with dashes "-"', ()=> {
    it('Should replace empty spaces with dashes', () => {
        // arrange
        const testString = "this is a test string";
        // act
        const formattedString = formatString(testString);
        // assert
        expect(formattedString).toEqual('this-is-a-test-string');
    });
    it('Should make all of the characters lower case and replace spaces with dashes', ()=> {
        // arrange
        const testString = 'ThiS iS a tESt StriNg';
        //act
        const formattedString = formatString(testString);
        //assert
        expect(formattedString).toEqual('this-is-a-test-string');

    })
})


// describe("Calling the API", ()=> {
//     it('Should return the data correctly', ()=> {
//         const apiResult = getCountriesData();
//         console.log(apiResult)
//         expect(apiResult).toEqual([{'name': 'Afghanistan', 'alpha2Code': 'AF'}, {'name': 'Poland', 'alpha2Code': 'PL'}]);

//     })
// })