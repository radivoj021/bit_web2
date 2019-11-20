var ctrlModule = (function (ui, data) {

    function onShowClick() {
        const showId = this.getAttribute('data-show-id');


        //data.fetchShow(id, function (show) {
        //ui.renderShow(show);
        //})
    }

    function onShowsSuccess(shows) {
        console.log("onShowsSuccess", shows);
        ui.displayShows(shows);
        ui.getShowCards().on('click', onShowClick)
    }

    function init() {
        console.log("inti", "My App init");
        data.searchShows(onShowsSuccess);
    }



    return {
        init
    }
})(uiModule, dataModule)

$(function () {
    ctrlModule.init()
})