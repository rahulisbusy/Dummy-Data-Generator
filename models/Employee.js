import  mongoose  from "mongoose";

const Schema = new mongoose.Schema({
    // <-- disable _id
    name: String,
    salary: Number,
    isManager:Boolean,
    language:String,
    city:String,


  });
  const Employee = mongoose.model('Employee',Schema);
  export default Employee