// Scripts
const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");


window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // add loading feature
    convertBtn.innerHTML = "<span> <i>Converting...<i/>  </span>";

    setTimeout(() => {
        convertBtn.innerHTML = "<span> Convert </span>";
    }, 1000)
    
})

function convertToCelsius() {
    let inputValue = degree.value;

    setTimeout(() => {
        if(tempType.value === "fahrenheit"){
            const fahrenheitToCelsius = (inputValue -32)*(5/9);
            document.getElementById('celsius').innerHTML = fahrenheitToCelsius.toFixed(3) + '°c' ;
        }
        else if(tempType.value === "kelvin"){
            const kelvinToCelsius = inputValue - 273.15;
            document.getElementById('celsius').innerHTML = kelvinToCelsius.toFixed(3) + '°c' ;
        }
    }, 1200)
}








