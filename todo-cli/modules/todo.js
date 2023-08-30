'use strict';
const {
  Modules1
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Modules1 {
    static associate(models) {
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modules1Name: 'My Todo-list',
  });
  return Todo;
};