var dataModule = (function () {
    class Shows {
        constructor(id, name, cover, poster) {
            this.id = id;
            this.name = name;
            this.cover = cover;
            this.poster = poster;
        }
    }
    /*  class InfoShow {
         constructor(id, name, poster, cast,description,)
     } */

    function searchShows(onShowsCallback) {
        console.log("data:", "searchShows");

        const url = 'http://api.tvmaze.com/shows';
        $.get(url, function (apiShows) {
            const shows = [];

            apiShows.forEach(function (apiShow) {
                shows.push(new Shows(apiShow.id, apiShow.name, apiShow.image.medium, apiShow.image.original));
            });

            onShowsCallback(shows.slice(0, 50));
        })

    }


    // data.fetchShow(id, function (show) {
    //ui.renderShow(show);
    //})


    return {
        searchShows

    };


})()

