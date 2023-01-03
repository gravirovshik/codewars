var str = "hieeelalaooo"; //строка
var vowels = "aeiou"; //гласные
var res = "";
for (u of str){
if (vowels.indexOf(u) == -1){
res = res + u;
}
 
}

console.log(res);
