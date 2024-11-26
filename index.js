const express = require('express');
const port = 1001;
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

let current_id = 1;
let reviews = [];
let review_1 = {
    id: 1,
    title: "LOTR",
    content: 'one to rule'
};

current_id++;
reviews.push(review_1);

app.post('/Review',(req,res)=>{
    let item ={};
    item.id = current_id;
    item.title = req.body.title;
    item.content = req.body.content;
    current_id++;
    reviews.push(item);

    res.status(200).json('ok.')
})



app.listen(port, ()=>
{
    console.log('Listening on port: ${port}' );
});
