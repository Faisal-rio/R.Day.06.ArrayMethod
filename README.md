# Countries Data Project

This project demonstrates solving problems using array methods on data fetched from the REST Countries API. The API provides information about countries, and we use array methods like `filter`, `forEach`, and `reduce` to extract and manipulate this data.

## Project Structure

- **index.html**: The main HTML file that loads the JavaScript.
- **countries.js**: The JavaScript file that contains the logic for fetching and processing the countries' data using `XMLHttpRequest`.

## Features

1. **Filter Countries by Region (Asia)**:

   - Fetches and displays all countries in the Asia continent using the `filter` method.

2. **Filter Countries by Population (< 200,000)**:

   - Displays all countries with a population of less than 200,000 using the `filter` method.

3. **Print Country Details (Name, Capital, Flag)**:

   - Logs the country name, capital, and flag for all countries using the `forEach` method.

4. **Total Population of All Countries**:

   - Calculates and displays the total population of all countries using the `reduce` method.

5. **Countries Using US Dollars**:
   - Fetches and displays the countries that use US Dollars as currency using the `filter` method.

## How to Run the Project

1. **Open the HTML File**:

   - Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox).

2. **View Output in the Console**:
   - Open the browser's Developer Tools and navigate to the Console tab to view the output.
   - For most browsers, press `Ctrl + Shift + I` (or `Cmd + Option + I` on macOS) to open Developer Tools.

## Technologies Used

- **HTML**: Structure of the page.
- **JavaScript**: Core logic for fetching and processing data.
- **XMLHttpRequest**: Used for making API requests to fetch countries data from the REST Countries API.

## REST Countries API

The project uses the [REST Countries API](https://restcountries.com/v2/all) to get data about countries such as their name, capital, population, currencies, and more.

## Example API URL

```text
https://restcountries.com/v2/all
```
