'use strict';

const { DataTypes, Model } = require('sequelize');
const { getUser } = require('../utils/context');
const { use } = require('passport');


module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deletedAt: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
    deletedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
    paranoid: true,
    hooks: {
      beforeCreate: (todo, options) => {
        const user = getUser();
        if (user) {
          todo.createdBy = user.id;
        }
      },
      beforeUpdate: (todo, options) => {
        const user = getUser();
        if (user) {
          todo.updatedBy = user.id;
        }
      },
      beforeDestroy: (todo, options) => {
        const user = getUser();
        if (user) {
          todo.deletedBy = user.id;
        }
      },
    }
  });
  return Todo;
};