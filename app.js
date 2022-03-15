let countries;
const results = document.querySelector('.section-center');

const displayCountries = (countries) => {
    results.innerHTML = '';
    let tr = "";
    
    countries.forEach(country => {
    console.log(country);
    tr += 
        `${country.flag}`;
        results.innerHTML += tr;
    });
    
    // countriesList = countriesList.join("");
    // results.innerHTML = countriesList;
};

const getCountries = async () => {
    countries = await fetch(
        'https://restcountries.com/v3.1/all'
    ).then(res => res.json());
    displayCountries(countries);
};

getCountries();