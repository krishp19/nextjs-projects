import mongoose from "mongoose";
import { User } from "../models/user";
import { Work } from "../models/work";

export const connectDb = async() => {

    try {
        const { connection } = await  mongoose.connect(process.env.MONGO_DB_URL,{
            dbName : "work_manager"
        });

        console.log("db connected...")
        //console.log(connection)


        //testing and creating new user
        //const work = new Work({
         //   Title: "Develop API Endpoints",
        //    Priority: "High",
         //   Status: "In Progress",
         //   Description: "Create and implement API endpoints for the new project",
        //    StartDate: "2024-07-01",
        //    EndDate: "2024-07-15"
        //});
        //console.log(work)
        //await work.save();
        //console.log("Work created...")

        console.log("connected with host: ", connection.host);
    } catch (error) {
        console.log("failed to connect with database")
        console.log(error);
    }
};