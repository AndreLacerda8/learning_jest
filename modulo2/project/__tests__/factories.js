const { factory } = require('factory-girl')
const { User } = require('../src/app/models')

factory.define('User', User, {
    name: 'André',
    email: 'andre@mail.com',
    password: '123123'
})

module.exports = factory