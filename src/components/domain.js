// DOMAIN REALTED BUSINESS LOGIC

export const getCountriesData = (setCountriesList, setIsLoading) => {
    return fetch("https://restcountries.eu/rest/v2/all").then((response) =>
    response
      .json()
      .then((data) => {
        setCountriesList(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
  );
}

export const filterCountriesList = (countriesList, regionFilter, inputValue) => 
  countriesList.filter((country) => {
    if (regionFilter !== "All") {
      return (
        country.region === regionFilter &&
        country.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
      );
    } else {
      return country.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
    }
});

export const filterBasedOfUrlParam = (pathname, countriesList) => {
  const countryToBeDisplayed = pathname;
  const noSlashCountryCode = countryToBeDisplayed.substr(1).toLowerCase();

  return countriesList.filter(
    (country) => formatString(country.name)
    .indexOf(noSlashCountryCode) !== -1
  )
};

export const getFullNamesArrayOfBorderCountries = (selectedCountry, countriesList) => {
  const arrayOfBorders = selectedCountry.borders;
  return countriesList
    .filter((country) => {
      return arrayOfBorders
        ? arrayOfBorders.indexOf(country.alpha3Code) !== -1
        : [];
    })
    .map((item) => item.name);
};

export const formatString = (string) =>  string.toLowerCase().replace(/\s+/g, '-'); // RegExp: replace spaces with -

// DOMAIN RELATED VARIABLES

export const selectableRegions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "All",
];