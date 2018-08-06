import mongoose from 'mongoose'

const OutcomeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    money:{
        type:Number
    }
})

const Outcome = mongoose.model('outcome',OutcomeSchema)

module.exports = {
    Outcome
}