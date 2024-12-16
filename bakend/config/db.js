import mongoose from "mongoose";

const connectedDb = async () => {
    try {
        await mongoose.connect(process.env.LOCAL_MONGOOSE)
        console.log(`The Mongoose is connected at ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Error in Mongodb:  ${error}`)
    }

}

export default connectedDb