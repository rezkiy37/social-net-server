const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const cors = require('cors')

const schema = require('../schema/schema')

const server = express()
const PORT = 3007

mongoose.connect('mongodb+srv://rezkiy37:RMX37Sumy@social-net-qhhfb.mongodb.net/social-net',
    { useUnifiedTopology: true, useNewUrlParser: true })

server.use(cors())

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

const dbConnection = mongoose.connection
dbConnection.on('error', err => console.log(err))
dbConnection.once('open', () => console.log('DB was connected!'))

server.listen(PORT, error => {
    error ? console.log(error) : console.log('Server is listening...')
})