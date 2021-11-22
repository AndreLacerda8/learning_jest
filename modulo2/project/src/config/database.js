require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
  host: 'db.sqlite',
  dialect: 'sqlite',
  storage: process.env.NODE_ENV === 'test' ? './__tests__/database.sqlite' : './db.sqlite',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}