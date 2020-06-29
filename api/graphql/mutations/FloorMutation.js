const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');
const merge = require('lodash.merge');

const { FloorType } = require('../types');
const { Floor } = require('../../models');

const createFloor = {
  type: FloorType,
  description: 'The mutation that allows you to create a new Floor',
  args: {
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
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
    managerEmail: {
      name: 'managerEmail',
      type: GraphQLString,
    },
  },
  resolve: (value, args) => (
    Floor.create(args)
  ),
};

const updateFloor = {
  type: FloorType,
  description: 'The mutation that allows you to update an existing Floor by Id',
  args: {
    floorId: {
      name: 'floorId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
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
    managerEmail: {
      name: 'managerEmail',
      type: GraphQLString,
    },
  },
  resolve: async (value, { floorId, siteId, floorNumber, wardenRequired, peepsRequired, floorManagerName, managerEmail, managerPhone }) => {
    const foundFloor = await Floor.findByPk(floorId);

    if (!foundFloor) {
      throw new Error(`Floor with id: ${floorId} not found!`);
    }

    const updatedFloor = merge(foundFloor, {
      floorId, 
      floorNumber, 
      wardenRequired, 
      peepsRequired, 
      floorManagerName, 
      managerEmail, 
      managerPhone
    });

    return foundFloor.update(updatedFloor);
  },
};

const deleteFloor = {
  type: FloorType,
  description: 'The mutation that allows you to delete a existing Floor by Id',
  args: {
    floorId: {
      name: 'floorId',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (value, { floorId }) => {
    const foundFloor = await Floor.findByPk(floorId);

    if (!foundFloor) {
      throw new Error(`Floor with id: ${floorId} not found!`);
    }

    await Floor.destroy({
      where: {
        floorId,
      },
    });

    return foundFloor;
  },
};

module.exports = {
  createFloor,
  updateFloor,
  deleteFloor,
};
