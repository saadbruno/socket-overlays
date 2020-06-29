$(function () {
    var socket = io();

    // Generic form data submission.
    // this submits a socket with the form ID and the form data.
    $('form').submit(function (e) {
        e.preventDefault(); // prevents page reloading

        // transforms form data into an object
        var data = {};
        $.each($(e.target).serializeArray(), function (_, kv) {
            data[kv.name] = kv.value;
        });

        console.log(e.target.id);
        console.log(data);

        // sends to Socket.IO server
        socket.emit(e.target.id, data);

        return false;
    });


    // this updates the scoreboard form with the new data
    // (in case multiple people are messing with the overlays at the same time)
    socket.on('scoreboard', function (data) {

        $('#team1').val(data.team1);
        $('#team2').val(data.team2);

    });


});