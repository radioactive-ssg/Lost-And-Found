import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
   phoneno: {
      type: String,
      required: true,
    },
    title:{
        type:String,
        required: true,
    },
    location:{
        type:String,
        required: false,
    },
    description:{
        type:String,
        required: true,
    },
    image:{
        type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Item = mongoose.model("itemschemas", itemSchema);
