const express =  require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


app.use(express.json())
app.use(cors())



app.get('/',(req,res) => {
    res.send('Look Mama I Can Code Now!!Now i install nodemon')
})




const users=[
    {id:1,name:'subho',email:'subh0@gmail.com',phone:'96744845403'},
    {id:2,name:'bikram',email:'bikram@gmail.com',phone:'96744645403'},
    {id:3,name:'rony',email:'rony@gmail.com',phone:'96745845403'},
    {id:4,name:'raju',email:'raju0@gmail.com',phone:'96784845403'},
    {id:5,name:'goja',email:'goja@gmail.com',phone:'96744865403'},
    {id:6,name:'jamal',email:'jamal@gmail.com',phone:'96744845403'},
    {id:7,name:'sujit',email:'sujit@gmail.com',phone:'96744843403'},


]




app.get('/users',(req,res)=>{

    // filter by search query
    if(req.query.name ){
        const search = req.query.name.toLowerCase();
        const matched=users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id =parseInt(req.params.id);
    const user=users.find(u => u.id === id);
    res.send(user)
})


app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','grapes','papaya'])
})


app.get('/fruits/mango/fazle'),(req,res)=>{
    res.send('fazlee flavour is not good')
}



//take data from browser

app.post('/user',(req,res)=>{
    console.log('request',req.body );
    const user = req.body;
    user.id = users.length+1;
    users.push(user)
    res.send(user);
})

app.listen(port,()=>{
    console.log('listening to port',port);
})