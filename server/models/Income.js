import mongoose from 'mongoose'

const IncomeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    money:{
        type:Number
    }
})

const Income = mongoose.model('income',IncomeSchema)

module.exports = {
    Income
}