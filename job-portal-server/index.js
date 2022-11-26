const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Job Portal Server Running!')
})


app.listen(port, () => {
    console.log(`Job Portal Server Running on, http://localhost:${port}`)
})