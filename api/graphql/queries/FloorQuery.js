const {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { FloorType } = require('../types');
const { Floor } = require('../../models');

const floorQuery = {
  type: new GraphQLList(FloorType),
  args: {
    floorId: {
      name: 'floorId',
      type: GraphQLInt,
    },
    siteId: {
      name: 'siteId',
      type: GraphQLInt,
    },
    floorNumber: {
      name: 'floorNumber',
      type: GraphQLString,
    },
    wardenRequired: {
      name: 'wardenRequired',
      type: GraphQLInt,
    },
    peepsRequired: {
      name: 'peepsRequired',
      type: GraphQLInt,
    },
    floorManagerName: {
      name: 'floorManagerName',
      type: GraphQLString,
    },
    managerPhone: {
      name: 'managerPhone',
      type: GraphQLString,
    },
    managerPhone: {
      name: 'managerPhone',
      type: GraphQLString,
    },
    managerEmail: {
      name: 'managerEmail',
      type: GraphQLString,
    },
    createdAt: {
      name: 'createdAt',
      type: GraphQLString,
    },
    updatedAt: {
      name: 'updatedAt',
      type: GraphQLString,
    },
  },
  resolve: (floor, args) => Floor.findAll({ where: args }),
};

module.exports = { floorQuery };
