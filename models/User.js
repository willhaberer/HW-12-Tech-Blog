const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
  validatePassword(password) {
    if (password === this.password) {
      return true;
    } else {
      return false;
    }
  }
}
