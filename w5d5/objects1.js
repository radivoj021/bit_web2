

Пређи на садржај
Коришћење Gmail - а са читачима екрана

3 од 1.091
js
Примљене
x
Stefan Djordjevic
Прилозиуто 5. нов 17: 57(пре 20 сати)


Jelena Tomasevic < jecatomasevic@gmail.com>
    Прилози
уто 5. нов 17: 57(пре 20 сати)
коме Nemanja


----------Forwarded message---------
    Od: Stefan Djordjevic < stdj.1907@gmail.com>
        Date: uto, 05.nov 2019. 17: 57
Subject: js
To: <jecatomasevic@gmail.com>




    2 прилога

var coffee = {
    name: "Grand",
    strength: "strong",
    flavour: "caramel",
    milk: "soya",
    sugar: 3
};

var movie = {
    title: "Fast & Furious",
    actors: ["Vin Diesel", "Paul Walker", "Michelle Rodriguez"],
    director: "Justin Lin",
    genere: "action",
    popularity: 6.6
};

function createObject(desc, lang, gitrep, compl) {
    var object = {
        description: desc,
        language: lang,
        gitRepository: gitrep,
        status: compl,
        print: function () {
            return this.gitRepository;
        },

        printLang: function () {
            if (this.language === "JavaScript") {
                return true;
            } else {
                return false;
            }
        },
        printRep: function () {
            if (this.status === true) {
                return "Program is complited";
            } else {
                return "Program is not complited";
            }
        }
    };

    return object;
}

var res = createObject("Tralalal", "JavaScript", "git", true);
console.log(pizza.printLang());

function culinaryRecipe(name1, cousine, value, listOfing, time, instr) {
    var object = {
        name: name1,
        typeOfCousine: cousine,
        complexity: value,
        ingredients: listOfing,
        preparingTime: time,
        instruction: instr,
        allIngredients: function () {
            return this.ingredients;
        },
        prepTime: function () {
            if (this.preparingTime === 15) {
                return true;
            } else {
                return false;
            }
        },
        cousine: function (nameOfCousine) {
            this.typeOfCousine = nameOfCousine;
            return this.typeOfCousine;
        },
        deleteIng: function (ing) {
            var c = [];
            for (var i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i] !== ing) {
                    c[c.length] = this.ingredients[i];
                }
            }
            this.ingredients = c;
        }
    };
    return object;
}

var pizza = culinaryRecipe(
    " Pizza",
    "Italian",
    5,
    ["water", "salt", "Tomato sauce"],
    18,
    "faaffagfa"
);

pizza.deleteIng("salt");
console.log(pizza.allIngredients());

//3.

function CreateObject(desc, lang, gitrep, compl) {
    this.description = desc;
    this.language = lang;
    this.gitRepository = gitrep;
    this.status = compl;

    this.prepTime = function () {
        return this.gitRepository;
    };

    this.printLang = function () {
        if (this.language === "JavaScript") {
            return true;
        } else {
            return false;
        }
    };
    this.printRep = function () {
        if (this.status === true) {
            return "Program is complited";
        } else {
            return "Program is not complited";
        }
    };
}

var compProgram = new createObject("sadla", "JavaScript", "Pera Peric", true);

console.log(CompProgram);

//4.
function CulinaryRecipe(name1, cousine, value, listOfing, time, instr) {
    this.name = name1;
    this.typeOfCousine = cousine;
    this.complexity = value;
    this.ingredients = listOfing;
    this.preparingTime = time;
    this.instruction = instr;

    this.allIngredients = function () {
        return this.ingredients;
    };

    this.prepTime = function () {
        if (this.preparingTime === 15) {
            return true;
        } else {
            return false;
        }
    };

    (this.cousine = function (nameOfCousine) {
        this.typeOfCousine = nameOfCousine;
        return this.typeOfCousine;
    }),
        (this.deleteIng = function (ing) {
            var c = [];
            for (var i = 0; i < this.ingredients.length; i++) {
                if (this.ingredients[i] !== ing) {
                    c[c.length] = this.ingredients[i];
                }
            }
            this.ingredients = c;
        });
}
var reciepe = new CulinaryRecipe();

//zadatak sa casa
function Address(street1, number1) {
    this.street = street1;
    this.number = number1;
    this.getInfo = function () {
        return this.street + " " + this.number;
    };
}

function Student(name, gen, adr) {
    this.name = name;
    this.generation = gen;
    this.address = adr;

    this.printInfo = function () {
        console.log(
            "Name:" +
            this.name +
            "->" +
            this.genertion +
            "->" +
            "Address:" +
            this.address.getInfo()
        );
    };

    this.setGeneration = function (gen) {
        this.generation = gen;
    };
}

var nemanjina = new Address("Nemanjina", 4);
var pera = new Student("Pera", 5, nemanjina);
pera.setGeneration(8);
console.log(pera);

console.log(nemanjina instanceof Address);

console.log(nemanjina instanceof Student);

console.log(typeof nemanjina === "object" && nemanjina instanceof Address);
objects.txt
Приказује се objects.txt.