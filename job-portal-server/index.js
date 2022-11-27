const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();


app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.166txbz.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

console.log(uri);

async function run() {
    try {
        console.log('Connected correctly to server');
        const db = client.db('jobPortal');
        const collection = db.collection('jobPosts');
        
        app.post('/createPost', async (req, res) => {
            const post = req.body;
            const result = await collection.insertOne(post);
            res.send(result);
        });
        
        app.get('/posts', async (req, res) => {
            const cursor = collection.find({});
            const posts = await cursor.toArray();
            res.send(posts);
        });

    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Job Portal Server Running!')
})


app.listen(port, () => {
    console.log(`Job Portal Server Running on, http://localhost:${port}`)
})