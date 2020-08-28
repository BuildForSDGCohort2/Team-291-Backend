'use strict'

import mongoose from '/mongoose'
const Schema = mongoose.Schema

const User = new Schema({
  username: String,
  email: String
})