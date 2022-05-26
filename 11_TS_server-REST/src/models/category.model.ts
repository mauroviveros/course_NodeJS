import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  estado: {
    type: Boolean,
    required: true,
    default: true
  }
});
CategorySchema.methods.toJSON = function(){
  const category = this.toObject();
  delete category.__v;
  delete category.estado;
  return category;
};



export default model("Category", CategorySchema);