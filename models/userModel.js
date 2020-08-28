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
  VehicleModelNumber: ({
    type: String,
    required: true
  }),
  LicensePlateNumber: ({
    type: String,
    required: true
  }),
  username: ({
    type: String,
  }),
  email: ({
    type: String,
    required: true
  }),
  password: ({
    type: String,
    required: true
  })
})