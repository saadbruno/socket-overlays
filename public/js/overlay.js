$(function () {
    var socket = io();

    socket.on('scoreboard', function (data) {
        console.log(data);

        updateInfo('#team1', data.team1);
        updateInfo('#team2', data.team2);

    });

});

// this function creates an anime.js timeline for updating the info.
// first, it fades out the current text, replaces it, then fades in again
function updateInfo(selector, data) {

    // Create animation timeline
    var tl = anime.timeline({
        targets: selector,
        easing: 'easeOutSine',
        duration: 300
    });

    tl.add({
        opacity: 0,
        complete: function (anim) {
            $(selector).html(data);


        }
    }).add({
        opacity: 1,
        complete: function (anim) {
            console.log('updated ' + selector + ' to ' + data);
        }
    });

}

