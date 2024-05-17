// Get all DOM elements to use
const input = document.getElementById('input');
const convertBtn = document.querySelector('.convert-btn');
const lengthOutput = document.querySelector('.length');
const volumeOutput = document.querySelector('.volume');
const massOutput = document.querySelector('.mass');

// Event listeners

convertBtn.addEventListener('click', runConversions);

// Functions

/**
 * This function runs all the conversion functions
 * when the convert button is clicked
 * @returns {void}
 */
function runConversions() {
  const unit = input.value;
  const { meters, feet } = convertLength(unit);
  const { liters, gallons } = convertVolume(unit);
  const { kilos, pounds } = convertMass(unit);

  lengthOutput.textContent = `${unit} meters = ${feet} feet | ${unit} feet = ${meters} meters`;
  volumeOutput.textContent = `${unit} liters = ${gallons} gallons | ${unit} gallons = ${liters} liters`;
  massOutput.textContent = `${unit} kilos = ${pounds} pounds | ${unit} pounds = ${kilos} kilos`;
}

/**
 * @param {number} unit
 * @returns {object}
 */
function convertLength(unit) {
  const meters = Number(unit / 3.281).toFixed(3);
  const feet = Number(unit * 3.281).toFixed(3);

  return { meters, feet };
}

/**
 *
 * @param {number} unit
 * @returns {object}
 */
function convertVolume(unit) {
  const liters = Number(unit / 0.264).toFixed(3);
  const gallons = Number(unit * 0.264).toFixed(3);

  return { liters, gallons };
}

function convertMass(unit) {
  const kilos = Number(unit / 2.204).toFixed(3);
  const pounds = Number(unit * 2.204).toFixed(3);

  return { kilos, pounds };
}
