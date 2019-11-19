function Genre(name){
    this.name = name;
    this.getData = function(){
       return "Genre: " + this.name;
    }
}



function Movie(title, length, genre){
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
    this.getData = function(){

        return "\n" + "\t\t" + "Movie: " + this.title + " | " + this.genre.getData() + " | " + "Length: " + this.length + " min";
    }
}


function Program(date){
    this.date = new Date(date);
    this.listOfMovies = [];

    this.addMovie = function(movie){
        if(movie instanceof Movie){
            this.listOfMovies.push(movie);
        }
    }

    this.getProgramLength = function(){
        var totalLength = 0;
        for(var i = 0; i < this.listOfMovies.length; i++){
            var movie = this.listOfMovies[i];
            totalLength += movie.length;
        }
        return totalLength;
    }

    this.getData = function(){
        var output = "\n\t" + date + " " + this.getProgramLength() + " min ";
        for(var i = 0; i < this.listOfMovies.length; i++){
            var movie = this.listOfMovies[i];
            output += movie.getData();
        }
        return output;
    }   
}

function Fest(name){
    this.name = name;
    this.listOfPrograms = [];
    this.allMovies = 0;

    this.addProgram = function(program){
        if(program instanceof Program){
            this.listOfPrograms.push(program);
        }
        else{
            console.log("Not a instance");
        }
    }

    this.getFestData = function(){
        var output = this.name + " has " + this.allMovies + " movie titles" + "\n";
        for(var i = 0; i < this.listOfPrograms.length; i++){
            var program = this.listOfPrograms[i];
            output += program.getData() + "\n";
        }
        return output;
    }
}




var comedy = new Genre("comedy");
var action = new Genre("action");
var drama = new Genre("drama");

var batman = new Movie("batman", "140", action);
var titanic = new Movie("titanic", "210", drama);
var hulk = new Movie("Hulk", "180", action);
var superman = new Movie("Superman", "150", action);


var subota = new Program("12-12-19");
var nedelja = new Program("13-12-19");

var fest = new Fest("Beofest");

subota.addMovie(batman);
subota.addMovie(titanic);
subota.addMovie(hulk);

nedelja.addMovie(superman);

fest.addProgram(subota);
fest.addProgram(nedelja);

console.log("-----------------");
console.log(fest.getFestData());