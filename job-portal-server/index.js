const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
        
        // create a document to be inserted
        app.post('/createPost', async (req, res) => {
            const post = req.body;
            const result = await collection.insertOne(post);
            res.send(result);
        });
        
        // get all posts
        app.get('/posts', async (req, res) => {
            const cursor = collection.find({});
            const posts = await cursor.toArray();
            res.send(posts);
        });

        // get a single post
        app.get('/post/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const post = await collection.findOne(query);
            res.send(post);
        });

        // delete a single post
        app.delete('/deletePost/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await collection.deleteOne(query);
            res.send(result);
        });

        // update a single post
        app.put('/updatePost/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    postName: req.body.postName,
                    companyName: req.body.companyName,
                    numberOfVacancy: req.body.numberOfVacancy,
                    currentDate: req.body.currentDate,
                    lastApplyDate: req.body.lastApplyDate,
                    jobDescription: req.body.jobDescription,
                    jobRequirements: req.body.jobRequirements,
                    jobBenefits: req.body.jobBenefits,
                    howToApply: req.body.howToApply,
                },
            };
            const result = await collection.updateOne(query, updateDoc, options);
            res.send(result);
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