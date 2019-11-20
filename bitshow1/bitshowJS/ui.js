var uiModule = (function () {
    var search = document.querySelector('.search')
    const $container = document.querySelector(".container")

    function getShowCards() {
        return $('.show');
    }

    function displayShows(shows) {
        console.log(shows);
        for (var i = 0; i < shows.length; i++) {
            var oneShow = shows[i];
            var $card = document.createElement('div');
            $card.classList.add('show');
            $card.setAttribute('data-show-id', oneShow.id);

            var $img = document.createElement('img');
            $img.setAttribute('src', oneShow.cover)
            $img.className = "coverImg"
            $card.appendChild($img);

            var $title = document.createElement('p');
            $title.textContent = oneShow.name;
            $card.appendChild($title);

            $container.appendChild($card);

        }

    }
    document.querySelector(".container").addEventListener('click', function () {
        $container.innerHTML = "";


    });
    function printShowInfo(shows) {
        var $poster = document.createElement('img')
        $poster.setAttribute("src", show.poster)
        $container.appendChild($poster);


    }


    return {
        displayShows,
        getShowCards
    }

})()