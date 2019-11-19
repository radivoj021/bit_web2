var ctrlModule = (function (ui, data) {
    var button = document.querySelector('.search-but');
    button.addEventListener("click", search)

    function onSuccess(users) {
        ui.printUsers(users)
    }

    function search() {
        var res = ui.getSearchText();
        data.searchUser(res, onSuccess);
    }

})(uiModule, dataModule)