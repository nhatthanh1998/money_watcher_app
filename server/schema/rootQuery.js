import {IncomeType} from './InComeType'
import {OutComeType} from './OutComeType'
import { GraphQLList,GraphQLString,GraphQLObjectType } from "graphql";
import { Income } from "../models/Income";
import {Outcome} from '../models/Outcome'

const RootQuery = new GraphQLObjectType({
    name:"rootQuery",
    fields:{
        incomes:{
            type:new GraphQLList(IncomeType),
            resolve(_,args){
                return Income.find().then(incomes=>{
                    return incomes
                })
            }
        },
        income:{
            type:IncomeType,
            args:{
                name:{
                    type:GraphQLString
                }
            },
            resolve(_,args){
                return Income.find({
                    name:args.name
                }).then(income=>{
                    return income
                })
            }
        },
        outcome:{
            type:OutComeType,
            args:{
                name:{
                    type:GraphQLString
                }
            },
            resolve(_,args){
                return Outcome.find({
                    name:args.name
                }).then(outcome=>{
                    return outcome
                })
            }
        },
        outcomes:{
            type:new GraphQLList(OutComeType),
            resolve(_,args){
                return Outcome.find().then(outcomes=>{
                    return outcomes
                })
            }
        }
    }
})

module.exports = {
    RootQuery
}