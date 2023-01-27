# Codewars
Решение задачек с сайта https://www.codewars.com/

1. numberToStrng - перевести число в строку.

2. sumArray - Суммировать все элементы массива, кроме минимального и максимального.

3. getCountV - Возвращает количество (count) гласных в данной строке. Мы будем рассматривать a, e, i, o, u как гласные (но не y).

4. highAndLow - Дается строка чисел, разделенных пробелами, нужно вернуть самое высокое и самое низкое число. Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым.

5. removeSmallest - дан массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив/список. Если есть несколько элементов с одинаковым значением, удалите тот, у которого индекс ниже. Если вы получаете пустой массив/список, верните пустой массив/список. Не меняйте порядок оставшихся элементов.

6. findMissingLetter - напишите метод, который принимает массив последовательных (возрастающих) букв в качестве входных данных и возвращает недостающую букву в массиве.

7. zeroFuel - ваше топливо на исходе, а ближайшая заправка находится в 50 милях отсюда! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. Осталось 2 галлона. Учитывая эти факторы, напишите функцию, которая сообщает вам, возможно ли добраться до заправки или нет. Функция должна возвращать значение true, если это возможно, и false, если нет.

8. powerOf4 - напишите метод, который возвращает значение true, если данный параметр имеет степень 4 (четверки), и значение false, если это не так. Если параметр не является целым числом (например, строка, массив), метод также должен возвращать значение false.

9. harshadNumbers - напишите функцию, которая проверяет, является ли положительное целое число n числом Харшада, и возвращает значение True, если произведение его суммы цифр и суммы цифр наоборот равно n; в противном случае возвращает значение False.

10. getSum - Учитывая два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их, и верните ее. Если два числа равны, верните a или b.

11. quarterOfYear - Учитывая месяц как целое число от 1 до 12, верните, к какому кварталу года он относится в виде целого числа.

12. FindTheStrayNumber - Вам дается массив целых чисел нечетной длины, в котором все они одинаковы, за исключением одного-единственного числа. Завершите метод, который принимает такой массив, и вернет это единственное другое число.

13. mostFrequentItemCount - Выполните функцию, чтобы найти количество наиболее часто встречающихся элементов массива. Вы можете предположить, что входные данные представляют собой массив целых чисел. Для пустого массива верните 0

14. palindrom - в этом упражнении вам будет дано положительное целое число, val, и вы должны создать функцию next_poll(), которая выведет наименьшее число палиндрома, превышающее val.

15. eqSumPowdig - Не считая числа 1, целое число 153 является первым целым числом, обладающим этим свойством: сумма третьей степени каждой из его цифр равна 153. Взгляни: 153 = 13 + 53 + 33 = 1 + 125 + 27 = 153. Следующее число, которое экспериментирует с этим конкретным поведением, - 370 с той же мощностью. Напишите функцию eq_sum_powdig(), которая находит числа ниже заданного верхнего предела hMax (включительно), удовлетворяющие этому свойству, но с разными показателями в качестве степени для цифр.

16. Ordered Count of Characters - Подсчитайте количество вхождений каждого символа и верните его в виде (списка кортежей) в порядке появления. Для возврата пустого вывода (пустой список).

17. Shortest Word - Верните длину самого короткого слова в переданной строке.

18. Hex Hash Sum - Завершите функцию, которая принимает допустимую строку и возвращает целое число. Каждый символ строки должен быть преобразован в шестнадцатеричное значение ее ascii-кода, тогда результатом должна быть сумма чисел в шестнадцатеричных строках (игнорируйте буквы).

19. Easy wallpaper - Джон хочет украсить стены комнаты обоями. Ему нужен надежный способ сделать все правильно. Джон знает, что прямоугольная комната имеет длину l метров, ширину w метров, высоту h метров. Стандартная ширина рулонов, которые он хочет купить, составляет 52 сантиметра. Длина рулона составляет 10 метров. Однако он помнит, что лучше иметь под рукой дополнительную длину обоев на случай ошибок или просчетов, поэтому он хочет купить длину на 15% большую, чем та, которая ему нужна. 
Ваша функция wallpaper(l, w, h) должна возвращать в виде простого английского слова в нижнем регистре количество рулонов, которые он должен купить. Пример:  обои (4.0, 3.5, 3.0) должны возвращать "десять", обои(0.0, 3.5, 3.0) должны возвращать "ноль". Записи: 
- все рулоны (даже с неполной шириной) укладываются край к краю - 0 <= l, w, h (числа с плавающей запятой); может случиться так, что w * h * l равно нулю - целое число r (количество бросков) всегда будет меньше или равно 20

20. recursionFactorial - вычислить факториал числа через рекурсию.

21. recursionFibonacci - вычислить число Фибоначчи числа через рекурсию.

22. Hash Function - функция создания хэш строки на основании введенного пароля и соли. Используем библиотеку crypto.

23. Random - На входе строка и количество символов выходной строки. Задача: сделать функцию, которая на вход принимает строку и количество символов, а на выходе возвращает случайный набор символов из переданной строки.

24. Frequency sequence - ваша задача состоит в том, чтобы вернуть выходную строку, которая преобразует входную строку s, заменяя каждый символ в s числом, представляющим количество раз, когда этот символ встречается в s, и разделяя каждое число символом (символами) sep.

25. Mean Means - Вам будет предоставлен список чисел и их среднее арифметическое. Однако в списке отсутствует один номер. Используя эту информацию, вы должны вычислить и вернуть среднее геометрическое значение ПОЛНОГО СПИСКА, включая отсутствующее число.

26. Descending Order - Ваша задача - создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с его цифрами в порядке убывания. По сути, переставьте цифры так, чтобы получилось максимально возможное число.

27. Вам будет предоставлено слово. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, верните средний символ. Если длина слова четная, верните 2 средних символа.

28. Find Vowels - Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными всеми гласными.Например, строка "Этот веб-сайт для неудачников, ЛОЛ!" стала бы "This wbst s fr lsrs LL!".Примечание: для этого ката y не считается гласной.

29. Mumbling - This time no story, no theory. The examples below show you how to write function accum: accum("abcd") -> "A-Bb-Ccc-Dddd"; accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

30. List Filtering - В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

31. Exes and Ohs - Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

32. Credit Card Mask - Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.

33. Sum of two lowest positive integers - Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed

34. Isograms - An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

35. Count consonants - Complete the function that takes a string of English-language text and returns the number of consonants in the string. Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

36. Two to One - Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

37. Friend or Foe? - Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

38. Sum of odd numbers - Given the triangle of consecutive odd numbers. Calculate the sum of the numbers in the nth row of this triangle.!

40. Regex validate PIN code - ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

41. Growth of a Population - In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

42. Trimming a string - Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

43. Sort array by string length. Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

44. Find the divisors - Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest.

45. Number of People in the Bus. There is a bus moving in the city which takes and drops some people at each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

46. Jaden Casing Strings. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below. Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

47. Training JS #33: methods of Math---max() min() and abs(). Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements. First, calculate the difference of the same index of the arr1 and arr2. Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think abs() can help you get the correct result. Then find the maximum and minimum values of them, and return the results in the form of an array.

48. Training JS #32: methods of Math---round() ceil() and floor(). Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer. If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.
If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method. If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

49. Training JS #14: Methods of Number object--toString() and toLocaleString(). Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255. Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it. the color code should starting with "#". and then use 2 characters per color.

50. Training JS #34: methods of Math---pow() sqrt() and cbrt() - Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.