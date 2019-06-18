const {GraphQLObjectType} = require('graphql');
const queryAllGadgets = require('./gadget/all');
const queryGadgetById = require('./gadget/byId');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        queryGadgetById,
        queryAllGadgets,
    }
})

module.exports = RootQuery;
