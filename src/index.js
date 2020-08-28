'use strict'

const express = require('express')
const {expressGraphQL} = require('express-graphql')


const app = express()

app.use('/graphql', graphqlHTTP({}))

app.listen(5000, () => console.log('Server Running'))