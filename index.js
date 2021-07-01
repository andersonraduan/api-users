const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const url = require('url');
const querystring = require('querystring');
const http = require('http-parser')
const { json } = require('express');
const app = express()
const port = 3000

app.use(express.json());



app.get('/users', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
        /*console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);*/
        const users = json;
        res.send(users)
  })
    
})

app.get('/posts/:id', (req, res) => {
    //res.send(req.params.id)
  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + req.params.id)
    .then(res => res.json())
    .then(json => {
        /*console.log("First user in the array:");
        console.log(json[0]);
        console.log("Name of the first user in the array:");
        console.log(json[0].name);*/
        const posts = json;
        res.send(posts)
  })
    
})

app.get('/postagens/:id', (req, res) => {
  //res.send(req.params.id)
  const postsUser = req.params.id;
  //res.send(postsUser) 
})

 app.use(express.static(path.join(__dirname, "/project-app/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join((__dirname + "/project-app/build/index.html")));

  });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})