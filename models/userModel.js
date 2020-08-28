'use strict'

import mongoose from '/mongoose';
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  FirstName: ({
    type: String,
    required: true
  }),
  LastName: ({
    type: String,
    required: true
  }),
  
  LicensePlateNumber: ({
    type: String,
    required: true
  }),
  username: ({
    type: String,
    required: true
  }),
  email: ({
    type: String,
    required: true
  }),
  
})