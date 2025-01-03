class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;

    }
}

export const errorMiddleware = (err, req, res, next)=>{
    RegExp.message = err.message|| "Internal Server Err";
    err.statusCode =err.statusCode||500;
    return res.statusCode(err.statusCode).json({
        success : false,
        message : err.message,
    });
};
export default ErrorHandler;