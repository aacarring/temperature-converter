const fahrenheitInput = document.querySelector('.fahrenheit input');
const celsiusInput = document.querySelector('.celsius input');

const inputs = document.querySelectorAll('input');

function updateTemps() {
    let fahrenheitTemp = parseFloat(fahrenheitInput.value).toFixed(2);
    let celsiusTemp = parseFloat(celsiusInput.value).toFixed(2);

    celsiusTemp = (5/9) * (fahrenheitTemp - 32);
    fahrenheitTemp = celsiusTemp * (9 / 5) + 32;

    console.log(fahrenheitTemp, celsiusTemp);
    
}

inputs.forEach(input => input.addEventListener('input', updateTemps));