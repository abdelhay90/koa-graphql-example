const {GraphQLObjectType} = require('graphql');
const gadgetsQueries = require('./gadget');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...gadgetsQueries
    }
});

module.exports = RootQuery;
