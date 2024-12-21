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

app
.route('/api/users/:id')
.get((req,res)=>{
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    res.json(user)
})
.patch((req,res)=>{
    // todo : edit the user with id
  return   res.json({status : "pending"})
})
.delete((req,res)=>{
    // todo : delete the user with id 
    res.json({status : "pending"})
})

app.post('/api/users',(req,res)=>{
    // todo : creat e new user
    res.json({status : "pending"})
})

app.patch('/api/users/:id',(req,res)=>{
    // todo : edit the user with id
    res.json({status : "pending"})
})

app.delete('/api/users/:id',(req,res)=>{
    // todo : delete the user with id 
    res.json({status : "pending"})
})




app.listen(port , ()=> console.log('server has started at port ${port}'))
