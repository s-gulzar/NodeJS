const express = require('express');
const app = express();
courses = [
    {id:1 , name:"course1"}, 
    {id:2 , name:"course2"},
    {id:3 , name:"course3"},
    {id:4 , name:"course4"},
];
app.get('/', (req, res) =>
{
    res.send("Hello world");

});


app.listen(3000, console.log('now listening at 3000'));