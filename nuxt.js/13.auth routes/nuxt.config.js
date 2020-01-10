import bodyParser from 'body-parser';
import session from 'express-session';

export default {
    head: {
        title: 'auth routes',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', content: 'Auth Routes example' }
        ]
    },
    serverMiddleware: [
        bodyParser.json(),
        session({
            secret: 'super-secret-key',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 }
        }),
        '~/api'
    ]
}