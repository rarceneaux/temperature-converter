const convertBtn = document.getElementById('btnToConvert');
const temperatureInput = document.getElementById('tempInput');
const celRadioBtn = document.getElementById('customRadio1');
const farRadioBtn = document.getElementById('customRadio2');
const clearInput = document.getElementById('clearTempInput');
const tempResult = document.getElementById('results');


// Print to DOM
const PTD = (stringToPrint,divId)=> {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};


// To Celsius 
const toCelsius = () => {
  const fahrenheitTemp = tempInput.value;
  const convertFtoC = (fahrenheitTemp - 32) * 5/9 ;
  const cOutcome = convertFtoC.toFixed();
  PTD(cOutcome +'\xB0C','results');
  if (cOutcome < 0+ '\xB0C') {
    tempResult.style.color = 'blue';
  } else if (cOutcome > 32+ '\xB0C'){
    tempResult.style.color = 'red';
  } else {
    tempResult.style.color = 'green';
  }
};

// To fahrenheit
const toFahrenheit = () => {
  const celsiusTemp = tempInput.value;
  const convertCtoF = (celsiusTemp * 9/5) + 32;
  const fOutcome = convertCtoF.toFixed();
  PTD(fOutcome +'\xB0F','results');
  if (fOutcome > 90+ '\xB0F') {
    tempResult.style.color = 'red';
  } else  if (fOutcome < 32+'\xB0F'){
    tempResult.style.color = 'blue';
    } else{
      tempResult.style.color = 'green'
    }
  };

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  if(celRadioBtn.checked === true){
    temperatureInput.focus();
    toCelsius();
  } else {
    (farRadioBtn.checked === true)
    temperatureInput.focus();
    toFahrenheit();
    }
  };


// Keyup Function needs revising
temperatureInput.addEventListener('keyup',(e)=>{
  if(e.keyCode === 13){
    determineConverter();
  }
});


// add event listeners to Radio Btns
document.getElementById('customRadio1').addEventListener('click', (e)=> {
});
document.getElementById('customRadio2').addEventListener('click', (e)=> {
});

// Clears value fields
document.getElementById('clearTempInput').addEventListener('click', (e) => {
  tempInput.value = '';
  results.innerHTML = '';
  customRadio1.checked = false;
  customRadio2.checked = false;
});


// Starts App
const init = () =>{
  convertBtn.addEventListener("click", determineConverter);
  temperatureInput.focus();
  temperatureInput.style.background = 'lightgrey';
  
};
init();