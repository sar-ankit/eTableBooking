 import ErrorHandler from "../error/error.js";
 import {} from  "../model/Schema.js";
import { Reservation } from "../models/Schema.js";

 export const sendReservation = async(req, req ,next)=>{
    const{firstName, lastName, email, phone, date, time} = req.body;
    if(!firstName|| !lastName|| !email|| !phone|| !date|| !time){
        return next(new ErrorHandler("Please fill full form",400));
    }
    try{
        await Reservation.create(firstName, lastName, email, phone, date, time);
       res.status(200).jason({
        sucess: true,
        message:"information sent sucessfully",
       });
    }catch(error){
        if(ErrorEvent.name ==="ValidationError"){
            const ValidationError = Object.values(error.errors).map(
            (err) => err.message
            );
            return next(new ErrorHandler(ValidationError.jason(" , "), 400));
        }
        return next(error);
    }
};