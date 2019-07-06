const UsersController = require('./controller/user.controller');
// const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.post('/users', [
        UsersController.insert
    ]);
    app.get('/users', [
        UsersController.list
    ]);
    app.get('/users/:userId', [
        UsersController.getById
    ]);
    app.patch('/users/:userId', [
        UsersController.patchById
    ]);
    app.delete('/users/:userId', [
        UsersController.removeById
    ]);
};