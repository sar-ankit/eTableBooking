import mongoose from 'mongoose';

export const dbConnection = () => {
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI environment variable is not defined.");
        return;
    }

    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTURANT",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connection to database successfully!");
    }).catch(err => {
        console.log(`Some error occurred while connecting to database: ${err}`);
    });
};
