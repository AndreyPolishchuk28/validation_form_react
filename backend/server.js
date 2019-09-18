const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://andrey:oguzul69@andrey-tfvce.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const API_PORT = 9000;
const app = express();


app.get('/question', async (req,res) =>{
    let question = [];
    await app.question.find({}).forEach(elem =>{
        question.push(elem)
    });
    res.send(question);
});


client.connect(err => {
    app.question = client.db("validation").collection("question");
    console.log('mongo connected');
});


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "static/build")));
app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'static/build/index.html')));
app.listen(API_PORT, () => console.log(`Server listening on port ${API_PORT}`));