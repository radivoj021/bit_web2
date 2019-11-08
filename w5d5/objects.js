/*function Student(n) {
    this.name = n;
    this.print = function () {
        console.log(this.name);
    }
    return 3 + 3;
}
var cf = new Student("Pera");
var regular = Student("Pera");
//v.name = 'Mika';

cf.print();
console.log('CF =>', cf);
console.log('Regular =>', cf);

var str = new String();
*/

//1.
function convert(num, base1, base2) {


}

//1.

function reverse(num) {
    var str = '' + num;
    var array = str.split('').reverse();


    return parseInt(array.join(''));
}

console.log(reverse(12345))

//2.
function alphaSort(str) {


    return str.split('').reverse().join('');

}

console.log(typeof alphaSort('Webmaster'));

//3.
function rearrang(str) {

}
//4.
function got(str) {
    return str.split(" ");
}
console.log(got("John Snow"));

//5.
function stringslice(str) {
    return str.slice(0, 6) + ".";
}

console.log(stringslice("John Snow"))

//6.
var a = 77;
function pad(a) {
    var res = a + 5;
    a = 9;
    return res;


}
resu = pad();
console.log(resu)
var a, b;
var res = function () {
    a = a++;
    b = b++

}
c