const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

const merge = require('lodash.merge');

const { SiteType } = require('../types');
const { Site } = require('../../models');

const createSite = {
  type: SiteType,
  description: 'The mutation that allows you to create a new Site',
  args: {
    siteName: {
      name: 'siteName',
      type: new GraphQLNonNull(GraphQLString),
    },
    openingHours: {
      name: 'openingHours',
      type: GraphQLString,
    },
    securityContact: {
      name: 'securityContact',
      type: GraphQLString,
    },
    address: {
      name: 'address',
      type: GraphQLString,
    },
    streetAddress: {
      name: 'streetAddress',
      type: GraphQLString,
    },
    zipCode: {
      name: 'zipCode',
      type: GraphQLString,
    },
    state: {
      name: 'state',
      type: GraphQLString,
    },
    city: {
      name: 'city',
      type: GraphQLString,
    },
    suburb: {
      name: 'suburb',
      type: GraphQLString,
    },
    totalEmployees: {
      name: 'totalEmployees',
      type: GraphQLInt,
    },
  },
  resolve: (value, args) => (
    Site.create(args)
  ),
};
const updateSite = {
  type: SiteType,
  description: 'The mutation that allows you to update an existing Site by Id',
  args: {
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    siteName: {
      name: 'siteName',
      type: GraphQLString,
    },
    openingHours: {
      name: 'openingHours',
      type: GraphQLString
    },
    securityContact: {
      name: 'securityContact',
      type: GraphQLString
    },
    totalEmployees: {
      name: 'totalEmployees',
      type: GraphQLInt
    },
  },
  resolve: async (value, { siteId, siteName, openingHours, securityContact, totalEmployees } ) => {
    const foundSite = await Site.findByPk(siteId);

    if (!foundSite) {
      throw new Error(`Site with id: ${siteId} not found!`);
    }

    const updatedSite = merge(foundSite, {
      siteName,
      openingHours,
      securityContact,
      totalEmployees
    });

    return foundSite.update(updatedSite);
  },
};

const deleteSite = {
  type: SiteType,
  description: 'The mutation that allows you to delete a existing Site by Id',
  args: {
    siteId: {
      name: 'siteId',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_, { siteId }) => {
    const foundSite = await Site.findByPk(siteId);

    if (!foundSite) {
      throw new Error(`Site with id: ${siteId} not found!`);
    }

    await Site.destroy({
      where: {
        siteId,
      },
    });

    return foundSite;
  },
};

module.exports = {
  createSite,
  updateSite,
  deleteSite,
};
