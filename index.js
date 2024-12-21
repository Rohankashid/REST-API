const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();

const port  = 8000;

//routes

app.get('/api/users',(req,res) =>{
    return res.json(users)
})

app.get('/users' , (req,res)=>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    `;
    res.send(html)
})

app.get('/users/:id' , (req,res)=>{
    const id = req.params.id;
    const user = users.filter((user) => user.id == id);
    res.json(user)
})




app.listen(port , ()=> console.log('server has started at port ${port}'))
