const convertBtn = document.getElementById('btnToConvert');
const temperatureInput = document.getElementById('tempInput');
const celRadioBtn = document.getElementById('customRadio1').required =true;
const farRadioBtn = document.getElementById('customRadio2').required =true;
const clearInput = document.getElementById('clearTempInput');
const tempResult = document.getElementById('results');
const resultsTag = document.getElementById('resultsTitle');
const resetBtn = document.getElementById('clearTempInput');

const PTD = (stringToPrint,divId)=> {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const toCelsius = () => {
  const fahrenheitTemp = tempInput.value;
  const convertFtoC = (fahrenheitTemp - 32) * 5/9 ;
  const cOutcome = convertFtoC.toFixed();
  PTD(cOutcome + '\xB0C','results');
  if (cOutcome < 0+ '\xB0C') {
    tempResult.style.color = 'blue';
  } else if (cOutcome > 32+ '\xB0C'){
    tempResult.style.color = 'red';
  } else {
    tempResult.style.color = 'green';
  }
};

const toFahrenheit = () => {
  const celsiusTemp = tempInput.value;
  const convertCtoF = (celsiusTemp * 9/5) + 32;
  const fOutcome = convertCtoF.toFixed();
  PTD(fOutcome + '\xB0F','results');
  if (fOutcome > 90+ '\xB0F') {
    tempResult.style.color = 'red';
  } else  if (fOutcome < 32+'\xB0F'){
    tempResult.style.color = 'blue';
    } else{
      tempResult.style.color = 'green'
    }
  };

temperatureInput.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
      determineConverter();
    } else {
e.preventDefault();
    }
  });




const determineConverter = (e) => {
  e.preventDefault();
  if (temperatureInput.value === '') {
    return 
  } else {
    if(celRadioBtn.checked === true){
      toCelsius();
    } else {
      (farRadioBtn.checked === true)
      toFahrenheit();
      }
    }
  };


radioBtnEvents  = () => {
celRadioBtn.addEventListener('click', (e)=> {});
farRadioBtn.addEventListener('click', (e)=> {});
};


const userActions = (e) => {
  resetBtn.addEventListener("click", (e) => {});
  temperatureInput.value = '';
  tempResult.innerHTML = '';
  celRadioBtn.checked = false;
  farRadioBtn.checked = false;
};
userActions();


const init = (e) => { 
  temperatureInput.focus();
  convertBtn.addEventListener("click", determineConverter);
  radioBtnEvents();
};
init();