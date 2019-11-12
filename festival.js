function Genre(name){
    this.name = name;

    this.getData = function(){
        return "Genre: " + this.name;
    }
}



function Movie(title, genre){
    this.title = title;
    this.genre = genre;

    this.getData = function(){
        return "\t" + "Movie: " + this.title + " | " + this.genre.getData();
    }
}



function Program(date){
    this.date = date;
    this.movieList = [];

    this.addMovie = function(movie){
        if(movie instanceof Movie){
            this.movieList.push(movie);
        }
    }

    this.getData = function(){
       
        for(var i = 0; i < this.movieList.length; i++){
           var output = this.movieList[i];
        }
        return output;
    }
}



/* Zanrovi */
var comedy = new Genre("comedy");
var action = new Genre("action");
var drama = new Genre("drama");

/* Filmovi */
var batman = new Movie("Batman", action);
var titanic = new Movie("Titanic", drama);

/* Program */
var program1 = new Program("12-12-10");

program1.addMovie(batman);



console.log(program1.getData());