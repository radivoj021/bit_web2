/* class Movie {
    constructor(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;

    }
    getData() {
        return `Title: ${this.title} | Duration: ${this.length} | Genre: ${this.genre} `;
    }
}

var btn = document.querySelector("#btn");

btn.addEventListener("click", addMovie);



function addMovie() {
    var title = document.querySelector("#title").value;
    var length = document.querySelector("#length").value;
    var genre = document.querySelector("#select").value;
    var output = document.querySelector("#output");
    var li = document.createElement("li");
    var form = document.querySelector("#form");

    var movie = new Movie(title, length, genre);
    console.log(movie.getData());

    var error = document.querySelector("#error");
    if (!title || !length) {
        error.append("Error");

    } else {
        li.append(movie.getData());
        output.append(li);
        form.reset();

    }

}


 */


/* https://github.com/taniarascia/mvc */