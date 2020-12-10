const fahrenheitInput = document.querySelector('.fahrenheit input');
const celsiusInput = document.querySelector('.celsius input');

const inputs = document.querySelectorAll('input');

function updateTemps() {
    let value = parseFloat(this.value).toFixed(2);
    
    if (isNaN(value)) return;

    if (this.classList.contains('fahrenheit')) {
        celsiusInput.value = (value * 1.8) + 32;
    } else {
        fahrenheitInput.value = (value - 32) / 1.8;
    }
}

inputs.forEach(input => input.addEventListener('input', updateTemps));