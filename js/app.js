$(document).ready(function () {

    function changeButtonPosition() {
        var width = window.innerWidth;

        if (width > 600) {
            addToHeader();
        } else {
            removeToHeader();
        }
    }

    function removeToHeader() {
        var buttonDom = $('#sumaTuIniciativa');
        buttonDom.removeClass('pull-right');
        buttonDom.prependTo('body');
    }

    function addToHeader() {
        var buttonDom = $('#sumaTuIniciativa');
        buttonDom.addClass('pull-right');
        buttonDom.appendTo('#header-content');
    }

    changeButtonPosition();

    $(window).resize(changeButtonPosition);
});