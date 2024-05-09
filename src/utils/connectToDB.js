import mongoose from "mongoose"

let isConnected = false;

const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("DB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: classizz,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const connection = mongoose.connection();

        connection.on('connected', () => {
            isConnected = true;
            console.log("Mongoose Connected");
        })

        connection.on('error', () => {
            isConnected = false;
            console.log("MongoDB Connection Error. Please make sure MongoDB is running");
            process.exit();
        })

    } catch (error) {
        console.log("Error Connecting DB: ", error);
    }
}

export default connectToDB;