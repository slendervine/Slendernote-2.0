import mongoose from "mongoose";

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://sa:123221321@aluranodejs.xbicstd.mongodb.net/nodejs")
                 


let db = mongoose.connection;

export default db;