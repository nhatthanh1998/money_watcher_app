import {mutation} from './mutation'
import {RootQuery} from './rootQuery'
import {GraphQLSchema} from 'graphql'

const dataSchema = new GraphQLSchema({
    mutation:mutation,
    query:RootQuery
})
module.exports = {
    dataSchema
}