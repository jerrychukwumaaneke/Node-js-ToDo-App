const {MongoClient}= require("mongodb");
let _db=null;
async function connectToDatabase(){
    if(!_db){
        const connectionstring=process.env.MONGODB_KEY;
        const dbName=process.env.DB_NAME;
        console.log(`connecting to database.${connectionstring} and db ${dbName}`);
        const client=await MongoClient.connect(connectionstring);
        _db=client.db(dbName);
    }
    return _db;

}
//to test if it is working we ueasync method
async function ping(){
    const db=await connectToDatabase();
    await db.command({ ping:1});
    console.log('pinged to database');

}
ping();
module.exports = { connectToDatabase, ping };