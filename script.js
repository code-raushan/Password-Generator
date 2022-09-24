const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerHTML).then(()=>{
        alert("Password copied to clipboard😀");
    })
})

generateEl.addEventListener('click', () => {
     resultEl.innerHTML = generatePassword(randomFunc.lower(), randomFunc.upper(), randomFunc.number(), randomFunc.symbol(), lengthEl.value);
    
})

function generatePassword(lower, upper, number, symbol, length) {
    let password = '';
    for(let i=0; i<length; i++){
        let idx = Math.floor(Math.random()*4);
        let arr = [lower, upper, number, symbol];
        password = password + arr[idx];
    }

    return password;
}

function getRandomLower() {
    if(lowercaseEl.checked)
        {let lower = 'abcdefghijklmnopqrstuvwxyz';
        let index = Math.floor(Math.random() * 26);
        let returnValue = lower[index];

        return returnValue;
    }else{
        return R;
    }
}

function getRandomUpper() {
    if(uppercaseEl.checked){
        let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let index = Math.floor(Math.random()*26);
        let returnValue = upper[index];

        return returnValue = upper[index];
    
    }else{
        return 0;
    }    
}

function getRandomNumber() {
    if(numbersEl.checked){
        let nums = '0123456789';
        let index = Math.floor(Math.random() * 10);
        let returnValue = nums[index];

        return returnValue;
    }else{
        return r;
    }
}

function getRandomSymbol() {
    if(symbolsEl.checked){
        let symbols = '!@#$%^&*()';
        let index = Math.floor(Math.random() * 10);
        let returnValue = symbols[index];

        return returnValue;
    }else{
        return 1;
    }
}