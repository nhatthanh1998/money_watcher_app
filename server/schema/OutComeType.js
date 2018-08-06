import {GraphQLString,GraphQLInt,GraphQLObjectType} from 'graphql'


const OutComeType = new GraphQLObjectType({
    name:"outcome",
    fields:{
        _id:{
            type:GraphQLString
        },
        name:{
            type:GraphQLString
        },
        money:{
            type:GraphQLString
        }
    }
})


module.exports = {
    OutComeType
}