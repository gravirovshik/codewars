function validatePIN (pin) {
let vowels = "1234567890";
let result = false;
if(pin.length == 4 || pin.length == 6){
    result = true;
    for (u of pin){
        if(vowels.indexOf(u) == -1)
        result = false;
        }
}

console.log(result);
}

validatePIN("13466");

function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }