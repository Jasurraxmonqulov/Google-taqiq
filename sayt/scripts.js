function executeSearch() {
    var query = document.getElementById('search-box').value;
    var element = google.search.cse.element.getElement('searchresults-only0');
    if (query) {
        element.execute(query);
    }
}

window.onload = function() {
    google.search.cse.element.render({
        gname: 'searchresults-only0',
        div: 'results',
        tag: 'searchresults-only',
        attributes: {
            disableWebSearch: true
        }
    });
};