function mostFrequentItemCount(collection) {


     // создаем уникальный массив
     let unique = [...new Set(collection)];
     console.log('Уникальный массив: ' + unique);
 
     // Это результат
     let result = 0;
 
     // Находим количество уникальных элементов в исходном массиве. 
     for (let u of unique) {
         //console.log(u);
         let al = collection.filter(x => x === u).length;
         console.log('Количество элементов ' + u + ' = ' + al);
         if (al > result){
            result = al;
            console.log('Наш номер: ' + result);
         }
        
     }
 
     console.log('Итог: ' + result);
     return result;
  }

mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]);