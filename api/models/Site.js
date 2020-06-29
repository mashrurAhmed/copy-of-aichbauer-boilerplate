const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const { Floor } = require('./Floor');

const tableName = 'sites';

const Site = sequelize.define('Site', {
  	siteId: {
  		type: Sequelize.INTEGER,
  		primaryKey: true,
  		autoIncrement: true,
  	},
    siteName: {
    	type: Sequelize.STRING
    },
    openingHours: {
    	type: Sequelize.TIME
    },
    securityContact: {
    	type: Sequelize.STRING
    },
    address: {
    	type: Sequelize.TEXT
    },
    streetAddress: {
    	type: Sequelize.TEXT
    },
    zipCode: {
    	type: Sequelize.STRING
    },
    state: {
    	type: Sequelize.STRING
    },
    city: {
    	type: Sequelize.STRING
    },
    suburb: {
    	type: Sequelize.STRING
    },
    totalEmployees: {
    	type: Sequelize.INTEGER
    }
}, { tableName });

Site.hasMany(Floor, { as: 'floors', foreignKey: 'siteId' });

module.exports = { Site };


//{id,siteName,openingHours,securityContact,address,streetAddress,zipCode,state,city,suburb,totalEmployees,