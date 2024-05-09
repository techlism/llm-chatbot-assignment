import mongoose from 'mongoose' ;
const { Schema } = mongoose;

const messageSchema = new Schema({
  type: {
    type: String,
    enum: ['User', 'Model'],
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  message: {
    type: String,
    required: true
  }
});

export default messageSchema;

