const { MongoClient } = require('mondodb');

async function main() {

    //connect with connection string copied from mongo 
    const uri = "mongodb+srv://mookathy3:Alandis1!@cluster0.oibfsor.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        await client.connect(); 

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}

// in terminal $ node demo.js