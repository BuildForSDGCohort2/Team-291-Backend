'use strict'

import mongoose from '/mongoose';
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  FirstName: ({
    type: String,
    required: true
  }),
  LastName: ({
    
  })
  username: ({
    type: String,
    required: true
  }),
  email: ({
    type: String,
    required: true
  }),
  
})