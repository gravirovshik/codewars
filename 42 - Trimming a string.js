

    function trim(arr, size) {
        let result = arr.length <= size ? arr : arr.slice(0, arr.length > 3 ? size - 3 : size) + '...'
        console.log(result);
    }

   


   


  trim("ZN", 3);