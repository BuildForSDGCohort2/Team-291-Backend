'use strict'

const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')


const app = express()

app.use('/graphql', graphqlHTTP({
  rootValue: root,
  graphiql: true
}))

app.listen(5000, () => console.log('Server Running'))