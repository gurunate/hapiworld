'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    port: 3000
});

server.route([
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('Hapi World');
        }
    }
]);

server.start(err => {
    if (err) {
        throw err;
    }

    console.info(`Server started at ${server.info.uri}`);
});