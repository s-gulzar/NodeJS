const express = require('express');
const app = express();

const courses =[
    {id:1, name:"horror"},
    {id:2, name:"Comedy"},
    {id:3, name:"Thriller"}
];

app.get('/api/courses', (req, res) => 
{
    res.send(courses);
});

app.post('/api/courses', (req, res) =>
{
    const {error} = validateCourse(req.body);
    if (error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);
    
});

function validateCourse(course)
{
    const schema = {
        name: joi.string().min(3).required()
        };

        
}

app.listen(3000);