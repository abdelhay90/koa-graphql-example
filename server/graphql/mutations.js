const {GraphQLObjectType} = require('graphql');
const addGadget = require('./mutations/gadget/add');
const updateGadget = require('./mutations/gadget/update');
const removeGadget = require('./mutations/gadget/remove');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addGadget: addGadget,
        updateGadget: updateGadget,
        removeGadget: removeGadget
    }
});

module.exports = Mutation;
