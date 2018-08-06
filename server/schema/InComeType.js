import {GraphQLString,GraphQLInt,GraphQLObjectType} from 'graphql'


const IncomeType = new GraphQLObjectType({
    name:"income",
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
    IncomeType
}