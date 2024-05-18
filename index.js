// Get all DOM elements to use
const input = document.getElementById('input');
const convertBtn = document.querySelector('.convert-btn');
const lengthOutput = document.querySelector('.length');
const volumeOutput = document.querySelector('.volume');
const massOutput = document.querySelector('.mass');

// Event listeners

convertBtn.addEventListener('click', () => {
  const unit = Number(input.value);
  const length = convert(unit, new Decimal(3.281));
  const volume = convert(unit, new Decimal(0.264));
  const mass = convert(unit, new Decimal(2.204));

  lengthOutput.textContent = `${unit} meters = ${length.imperial} feet | ${unit} feet = ${length.metric} meters`;
  volumeOutput.textContent = `${unit} liters = ${volume.imperial} gallons | ${unit} gallons = ${volume.metric} liters`;
  massOutput.textContent = `${unit} kilos = ${mass.imperial} pounds | ${unit} pounds = ${mass.metric} kilos`;
});

// Functions

/**
 * @param {number} unit
 * @param {number} ratio
 * @returns {object}
 */
function convert(unit, ratio) {
  const decimalUnit = new Decimal(unit);
  const metric = decimalUnit.dividedBy(ratio).toFixed(3);
  const imperial = decimalUnit.times(ratio).toFixed(3);

  return { metric, imperial };
}
