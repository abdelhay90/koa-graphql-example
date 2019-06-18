const {GraphQLObjectType} = require('graphql');
const gadgetsMutations = require('./mutations/gadget');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        ...gadgetsMutations
    }
});

module.exports = Mutation;
