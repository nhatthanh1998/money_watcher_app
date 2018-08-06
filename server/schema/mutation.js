import {IncomeType} from './InComeType'
import {OutComeType} from './OutComeType'
import { GraphQLList,GraphQLString,GraphQLObjectType,GraphQLInt } from "graphql";
import { Income } from "../models/Income";
import {Outcome} from '../models/Outcome'
import 'babel-polyfill'

const mutation = new GraphQLObjectType({
    name:"mutation",
    fields:{
        addIncome:{
            type:IncomeType,
            args:{
                name:{
                    type:GraphQLString
                },
                money:{
                    type:GraphQLInt
                }
            },
            async resolve(_,args){
                const income = await new Income({
                    name:args.name,
                    money:args.money
                }).save()
                return income
            }
        },
        deleteIncome:{
            type:IncomeType,
            args:{
                _id:{
                    type:GraphQLString
                }
            },
            async resolve(_,args){
                const deletedIncome = await Income.findById(args._id).then(income=>{
                    income.remove()
                    return income
                })
                return deletedIncome
            }
        },
        updateIncome:{
            type:IncomeType,
            args:{
                _id:{
                    type:GraphQLString
                },
                name:{
                    type:GraphQLString
                },
                money:{
                    type:GraphQLInt
                }
            },
            async resolve(_,args){
                const updatedIncome = await Income.findById(args._id).then(income=>{
                    if(args.name){
                        income.name = args.name
                    }
                    if(args.money){
                        income.money = args.money
                    }
                    return income.save()
                })
                return updatedIncome
            }
        },
        addOutcome:{
            type:OutComeType,
            args:{
                name:{
                    type:GraphQLString
                },
                money:{
                    type:GraphQLInt
                }
            },
            async resolve(_,args){
                const outcome = await new Outcome({
                    name:args.name,
                    money:args.money
                }).save()
                return outcome
            }
        },
        deleteOutcome:{
            type:OutComeType,
            args:{
                _id:{
                    type:GraphQLString
                }
            },
            async resolve(_,args){
                const deletedOutcome = await Outcome.findById(args._id).then(outcome=>{
                    outcome.remove()
                    return outcome
                })
                return deletedOutcome
            }
        },
        updateOutcome:{
            type:OutComeType,
            args:{
                _id:{
                    type:GraphQLString
                },
                name:{
                    type:GraphQLString
                },
                money:{
                    type:GraphQLInt
                }
            },
            async resolve(_,args){
                const updatedOutcome = await Outcome.findById(args._id).then(outcome=>{
                    if(args.name){
                        outcome.name = args.name
                    }
                    if(args.money){
                        outcome.money = args.money
                    }
                    return outcome.save()
                })
                return updatedOutcome
            }
        }
    }
})

module.exports = {
    mutation
}