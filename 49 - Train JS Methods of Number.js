function colorOf(r,g,b){
    let color = '#';
   // color = r.toString(16) + g.toString(16) + b.toString(16) + color;
   // console.log(color);

   let red = r.toString(16);
   if(red.length < 2) {red = "0" + red;}
   console.log(red);

   let green = g.toString(16);
   if(green.length < 2) {green = "0" + green;}
   console.log(green);

   let blue = b.toString(16);
   if(blue.length < 2) {blue = "0" + blue;}
   console.log(blue);

   color = color + red + green + blue;
   console.log(color);


    
  }

colorOf(1, 2 ,3);