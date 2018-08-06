import {mongoose} from './database/mongoose'
import {dataSchema} from './schema/Schema'
import {graphiqlExpress,graphqlExpress} from 'apollo-server-express'
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use('/graphql',bodyParser.json(),graphqlExpress({
    schema:dataSchema
}))
app.use(graphiqlExpress({
    endpointURL:"/graphql"
}))

app.listen(4000,()=>{
    console.log(`Graphql server is now start on port 4000`)
})