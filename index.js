const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();

const port  = 8000;

//routes

app.get('/users' , (req,res)=>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    `;
    res.send(html)
})


app.get('/api/users',(req,res) =>{
    return res.json(users)
})


app.get





app.listen(port , ()=> console.log('server has started at port ${port}'))
