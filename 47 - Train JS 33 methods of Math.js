function maxMin(arr1,arr2){

    let difArr = [];
    let result = [];

    for(let i = 0; i < arr1.length; i++){
        let diff = Math.abs(arr1[i] - arr2[i]);
        console.log(diff);
        difArr.push(diff);
        console.log(difArr);
    }
    
    result.push(Math.max(...difArr))
    result.push(Math.min(...difArr))
    console.log(result);
    
  }

maxMin([1,3,5],[9,8,7])

function maxMin(arr1,arr2){
    var rs=arr1.map((x,i)=>Math.abs(x-arr2[i]));
    return [Math.max(...rs),Math.min(...rs)];
  }