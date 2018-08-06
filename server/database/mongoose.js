import mongoose from 'mongoose'
import keys from '../config/keys'
mongoose.Promise = global.Promise

mongoose.connect(keys.MONGO_URI)

module.exports = {
    mongoose
}