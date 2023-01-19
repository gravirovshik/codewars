function nbYear(p0, percent, aug, p) {
   percent = percent / 100;
   let year = 0;
   while (p0 < p){
    year = year + 1;
    p0 = Math.floor(p0 + (p0 * percent) + aug);
    
   }
   console.log(year);

}

nbYear(1500000, 0.25, 1000, 2000000);