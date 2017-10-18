const express= require('express');
const bodyParser= require('body-parser');
const port= 3000;
const bookCtrl= require(__dirname + '/controllers/books_controller.js');


const app= express();

app.use(bodyParser.json());


app.get('/api/books', bookCtrl.read);
app.post('/api/books', bookCtrl.create);
app.put('/api/books/:id', bookCtrl.update);
app.delete('/api/books/:id', bookCtrl.delete);



app.listen(port, ()=>{
  console.log(`WE LIVE BABY!! on port: ${port}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const bc = require(__dirname + '/controllers/books_controller.js');
//
// const app = express();
//
// app.use( bodyParser.json() );
//
// const baseURL = "/api/books";
// app.post(baseURL, bc.create);
// app.get(baseURL, bc.read);
// app.put(`${baseURL}/:id`, bc.update);
// app.delete(`${baseURL}/:id`, bc.delete);
//
// const port = 3000;
// app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
