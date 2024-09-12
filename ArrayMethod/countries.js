// countries.js

// a. Get all the countries from the Asia continent/region using the Filter function
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);
  var asianCountries = result.filter((country) => country.region === "Asia");
  console.log(
    "Asian Countries:",
    asianCountries.map((country) => country.name)
  );
};

// b. Get all the countries with a population of less than 200,000 using the Filter function
var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v2/all");
request1.send();
request1.onload = function () {
  var result1 = JSON.parse(request1.response);
  var lowPopulationCountries = result1.filter(
    (country) => country.population < 200000
  );
  console.log(
    "Countries with Population < 200,000:",
    lowPopulationCountries.map((country) => country.name)
  );
};

// c. Print the following details: name, capital, flag using the forEach function
var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v2/all");
request2.send();
request2.onload = function () {
  var result2 = JSON.parse(request2.response);
  result2.forEach((country) => {
    console.log(
      `Name: ${country.name}, Capital: ${
        country.capital ? country.capital[0] : "N/A"
      }, Flag: ${country.flags.svg}`
    );
  });
};

// d. Print the total population of countries using the reduce function
var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v2/all");
request3.send();
request3.onload = function () {
  var result3 = JSON.parse(request3.response);
  var totalPopulation = result3.reduce(
    (acc, country) => acc + country.population,
    0
  );
  console.log("Total Population of Countries:", totalPopulation);
};

// e. Print the countries which use US Dollars as currency
var request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v2/all");
request4.send();
request4.onload = function () {
  var result4 = JSON.parse(request4.response);
  var countriesUsingUSD = result4.filter(
    (country) =>
      country.currencies &&
      Object.values(country.currencies).some(
        (currency) => currency.code === "USD"
      )
  );
  console.log(
    "Countries using US Dollars as currency:",
    countriesUsingUSD.map((country) => country.name)
  );
};
