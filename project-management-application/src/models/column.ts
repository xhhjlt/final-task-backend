import mongoose from 'mongoose';

const { Schema } = mongoose;
const columnScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: false,
  },
  boardId: {
    type: String,
    required: true,
  }
}, { versionKey: false });

export default mongoose.model('Column', columnScheme);