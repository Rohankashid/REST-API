const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();

const port  = 8000;

// middleware
app.use(express.urlencoded({extended:false}));  // for form data

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
    const body = req.body;
  
    users.push({ ...body , id: users.length + 1}); 

    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users) , (err , data)=>{
        return res.json({status : "pending"})
    });

   
    console.log(body);
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




app.listen(port , ()=> console.log(`server has started at port ${port}`));
