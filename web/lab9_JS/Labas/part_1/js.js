/**
 * Created by 110-3 on 20.11.2014.
 */
(function() {
    var a = +prompt("Введите a: ");
    var b = +prompt('Введите b: ');
    var c = +prompt('Введите c: ');

    var D = (b*b-4*a*c);

    if (D < 0) {
        alert('Ты не диско дискремент.');
    }
    else if (D == 0){
        var x1 = (-1)*b/2*a;
    }
    else
    {
        var x1 = (((-1)*b-Math.sqrt(D))/(2*a));
        var x2 = (((-1)*b+Math.sqrt(D))/(2*a));
    }
    alert(x1+" "+x2);
})();