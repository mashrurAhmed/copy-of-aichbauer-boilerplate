const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'floors';

const Floor = sequelize.define('Floor', {
  floorId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  floorNumber: {
  	type: Sequelize.STRING
  },
  wardenRequired: {
  	type: Sequelize.INTEGER
  },
  peepsRequired: {
  	type: Sequelize.INTEGER
  },
  floorManagerName: {
  	type: Sequelize.STRING
  },
  managerPhone: {
  	type: Sequelize.STRING
  },
  managerEmail: {
  	type: Sequelize.STRING
  }

}, { tableName });

module.exports = { Floor };