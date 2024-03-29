const {GraphQLString} = require('graphql');
const gadgetGraphQLType = require('../../types/gadget');
const {Gadget} = require('../../../models');

module.exports = {
    type: gadgetGraphQLType,
    args: {id: {type: GraphQLString}},
    resolve(parent, args) {
        return Gadget.findById(args.id);
    }
};
