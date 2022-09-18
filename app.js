// https://www.omnicalculator.com/conversion/stone-to-lbs

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lbsRadio = document.getElementById('lbsRadio');
const stoneRadio = document.getElementById('stoneRadio');

let lbs;
let stone = v; 

// labels of the inpust
const variable = document.getElementById('variable');

lbsRadio.addEventListener('click', function() {
  variable.textContent = 'Stone';
  stone = v;
  result.textContent = '';
});

stoneRadio.addEventListener('click', function() {
  variable.textContent = 'lbs';
  lbs = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lbsRadio.checked)
    result.textContent = `lbs = ${computelbs().toFixed(5)}`;

  else if(stoneRadio.checked)
    result.textContent = `Stone = ${computestone().toFixed(5)}`;
})

// calculation

function computelbs() {
  return Number(stone.value) * 14;
}

function computestone() {
  return Number(lbs.value) / 14;
}