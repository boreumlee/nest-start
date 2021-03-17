import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const shopeeModuleSchema = new Schema({
  module_id: { type: Number },
  module_name: { type: String },
  items: {
    type: [
      {
        id: { type: Number },
        name: { type: String },
      },
    ],
  },
});
