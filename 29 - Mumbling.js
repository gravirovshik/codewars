function accum(s) {

    let l = s.length;
   // console.log(s[0]);
    let r = ''

    for (let i = 0; i <= l; i++){
        r = r + '-';
        for(let j = 0; j < i; j++){
            if(j == 0) { r = r + s[i-1].toUpperCase()}
            else {r = r + s[i-1].toLowerCase()}

        }
       // console.log(r.slice(2));
       // console.log(r);       
    }
    r = r.slice(2);
    console.log(r); 
	
}

//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

accum("RqaEzty");