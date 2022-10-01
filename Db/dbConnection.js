require("dotenv").config({ path: "./Keys.env" });

const { MongoClient, ServerApiVersion } = require("mongodb");

const mdbUsername = process.env.amanjadoo;
const mdbPassword = process.env.Pubg god1;
const uri = `mongodb+srv://${mdbUsername}:${mdbPassword}@cluster0.br8pm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);

const mdClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
mdClient.connect();
module.exports = mdClient;
