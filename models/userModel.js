'use strict';

import Joi from 'joi';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  firstName: ({
    type: String,
    required: true
  }),
  lastName: ({
    type: String,
    required: true
  }),
  vehicleModelNumber: ({
    type: String,
    required: true
  }),
  licenseNumber: ({
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
  }),
  createdAt: ({
    type: Date.now()
  })
});