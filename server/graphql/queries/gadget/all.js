const {GraphQLList} = require('graphql');
const gadgetGraphQLType = require('../../types/gadget');
const {Gadget} = require('../../../models');

module.exports = {
    type: new GraphQLList(gadgetGraphQLType),
    args: {},
    resolve() {
        return Gadget.find({})
    }
};
