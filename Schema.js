import mongoose from "mongoose";
import validator from "validator";

const Schema = new mongoose.Schema({
    firstName:{
       type: String,
       required: true, 
       minLength:[3, "First name must contain at least three character "],
       maxLength:[30, "First name must contain at least three character "],
    },
    lasttName:{
        type: String,
        required: true, 
        minLength:[3, "last name must contain at least three character "],
        maxLength:[30, "last name must contain at least three character "],
     },
     email:{
        type: String,
        required: true, 
        validator:[validator.isEmail,"provide a valid email"],
     },
     phone :{
        type :String,
        required: true,
        minLength:[10, "phone number contain only 10 number "],
        maxLength:[10, "phone number contain only 10 number "],

     }, 
     time :{
        type: String,
        required:true,

     },
     date: {
        type:String,
        required:true,
     },

    
});
export const Reservation = mongoose.model("Reservation", Schema);