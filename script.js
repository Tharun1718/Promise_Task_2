
let countryName = document.querySelector(".input-container"); // get the country name through input field
let result = document.querySelector(".result-container"); // result element to display the country details.

countryName.addEventListener("input", (event) =>{
    let country = countryName.value;
    console.log(country);
    fetch("https://restcountries.com/v3.1/all")  // fetch the data from rest countries api
    .then((data)=> data.json())                  // response is converted to json
    .then((res)=> { 
        res.forEach((ele) => {                   // iterating over array of country objects using forEach method
            if(ele.name.common.toLowerCase() === country.toLowerCase()){
                result.innerHTML =`
                <div class="country-details-container">
                <h2>${ele.name.common}</h2>
                <img src=${ele.flags.png} alt=${ele.name.common}/>
                <p><span class="specs">Official Name :</span>${ele.name.official}</p>
                <p><span class="specs">Capital :</span>${ele.capital}</p>
                <p><span class="specs">Continent :</span>${ele.continents}</p>
                <p><span class="specs">Area :</span>${ele.area}</p>
                </div>
                `
            }else {
                console.log("error");
            }
        });
    })
    .catch((err)=> console.log(err))
});