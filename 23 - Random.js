// сделать функцию, которая сибирает строку случайных символов
// в функцию передаем строку и количество символов

function Randomize(str, n) {

    rezult = '';
    
    for (let i = 1; i <=n; i++){

        rezult = rezult + str[Math.floor(Math.random()*str.length)]

    }

    return rezult;
 
}


let str = 'qwer!@##*!(&$(*$!$^tyuiop'
console.log(Randomize(str, 212));

