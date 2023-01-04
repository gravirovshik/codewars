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