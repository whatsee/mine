/**
 * Created by 110-3 on 21.11.2014.
 */
(function() {
    alert('Это диско калькулятор!. Погнали. Тыц-тыц-тыц');

    var numberOne = +prompt('Введи первое число!');
    var numberTwo = +prompt('Введи второе число!');
    var pluhindui =  prompt('Введи знак');
    var duipluhin;

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    while (!(isNumeric(numberOne)))
    {
        var numberOne = +prompt('Введи первое число!');
    }
    document.write(numberOne+'<br>');
    while (!(isNumeric(numberTwo)))
    {
        var numberTwo = +prompt('Введи второе число!');
    }
    document.write(numberTwo+'<br>');

    switch (pluhindui) {
        case '+':
            duipluhin = numberOne + numberTwo
            break
        case '-':
            duipluhin = numberOne - numberTwo
            break
        case '*':
            duipluhin = numberOne * numberTwo
            break
        case '/':
            duipluhin = numberOne / numberTwo
            break
        case '%':
            duipluhin = (numberOne / numberTwo)*100
            break
        case '**':
            duipluhin = Math.pow(numberOne,numberTwo)
        default:
            alert('АААА ты ввел некоретный плюх...')
    }

    document.write(duipluhin);
})();