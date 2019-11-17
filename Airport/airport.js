function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.getData = function() {
  return this.name + " " + this.surname;
};

function Seat(number, category) {
  this.number = number;
  this.category = category;
}

Seat.prototype.getData = function() {
  return (
    "\t" + this.number + " " + this.category + "\n" + "---------------------"
  );
};

function Passenger(person, seat) {
  this.person = person;
  this.seat = seat;
}

Passenger.prototype.getData = function() {
  return this.person.getData() + "\n" + this.seat.getData();
};

var pera = new Person("Pera", "Peric");
var zika = new Person("Zika", "Zikic");

var seat1 = new Seat("21", "first");
var seat2 = new Seat("54", "second");

var passenger1 = new Passenger(pera, seat1);
var passenger2 = new Passenger(zika, seat2);

var res = passenger1.getData();
var res1 = passenger2.getData();

console.log(res);
console.log(res1);
