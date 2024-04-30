// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true, 
    allowNull: false 
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false 
  }
}, {
  hooks: {
    async beforeCreate(user) {
     
      if (!user.password) {
        throw new Error(' a senha é obrigatória!');
      }
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  }
});

module.exports = User;
