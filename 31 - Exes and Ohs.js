function XO(str) {
    
    let result = false;
    let unique = [...str.toLowerCase()];
    console.log(unique);
    let o = unique.filter(x => x === "o").length;
    console.log(o);
    let x = unique.filter(x => x === "x").length;
    console.log(x);
    if (o == x) {result = true};
    if (o == 0 && x == 0) {result = true};
    console.log(result);
}

XO("xp");