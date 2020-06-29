const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const FloorType = new GraphQLObjectType({
  name: 'Floor',
  description: 'This represents a Floor of a Site',
  fields: () => ({
    floorId: {
      type: GraphQLInt,
      resolve: (floor) => floor.floorId,
    },
    siteId: {
      type: GraphQLInt,
      resolve: (floor) => floor.siteId,
    },
    floorNumber: {
      type: GraphQLString,
      resolve: (floor) => floor.floorNumber,
    },
    wardenRequired: {
      type: GraphQLInt,
      resolve: (floor) => floor.wardenRequired,
    },
    peepsRequired: {
      type: GraphQLInt,
      resolve: (floor) => floor.peepsRequired,
    },
    floorManagerName: {
      type: GraphQLString,
      resolve: (floor) => floor.floorManagerName,
    },
    managerPhone: {
      type: GraphQLString,
      resolve: (floor) => floor.managerPhone,
    },
    managerEmail: {
      type: GraphQLString,
      resolve: (floor) => floor.managerEmail,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (floor) => floor.createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (floor) => floor.createdAt,
    },
  }),
});

module.exports = { FloorType };
