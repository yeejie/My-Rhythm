module.exports = function (io) {
    'use strict';
    var config = require('./config');
    var azure = require('azure');

    io.on('connection', function (socket) {

        if (socket.client.sockets[0].request.user.provider == 'facebook') {
            console.log('joining room ' + 'facebook' + socket.client.sockets[0].request.user.providerData.id);
            socket.join('facebook' + socket.client.sockets[0].request.user.providerData.id);
        }
        else if (socket.client.sockets[0].request.user.provider == 'google') {
            console.log('joining room ' + 'google' + socket.client.sockets[0].request.user.providerData.id);
            socket.join('google' + socket.client.sockets[0].request.user.providerData.id);
        }
        else {
            console.log('not joining any room');
        }

    });

    setInterval(function () {

        var connectionString = config.qhqueue.queue;
        var queueService = azure.createQueueService(connectionString);
        var queueName = 'qhqueue';
        queueService.getMessages(queueName, function (error, serverMessages) {
            if (!error) {
                // Only 1 message per time. more message add { numofmessages: up to 32 } after queueName
                // serverMessages[0].messagetext
                if (serverMessages.length == 0) {
                    //console.log('serverMessage length is 0');
                    return;
                }

                var split = serverMessages[0].messagetext.split('|');
                var room = split[0] + split[1];

                var dataobject = { meta: split[2], val: { x: parseInt(split[3]), y: parseFloat(split[4])} };
                console.log(dataobject);
                console.log(room);

                io.sockets.in(room).emit('realtimedata', dataobject);

                queueService.deleteMessage(queueName, serverMessages[0].messageid, serverMessages[0].popreceipt, function (error) {
                    if (!error) {
                        // Message deleted
                    }
                });
            }
        });

    }, 5000);
};