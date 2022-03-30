let express = require('express');
let app = express();
const mangose = require('mongoose');
let cors = require('cors');
const { default: mongoose } = require('mongoose');
var UtilisateurRoute = require('./routes/UtilisateurRoute');
const path = require('path')

//Gestion Cors
app.use(cors({ origin: "http://localhost:3000/" }));
app.use(express.static(__dirname + "/web"));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//conection mangoDB
mongoose.connect('mongodb+srv://user:user12345678@mangodb.unp9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{
  console.log('conexion succes ')
}).catch((error) =>{
  console.log(error);
});

app.use('/api/Utilisateur', UtilisateurRoute);

app.use(express.static('dist/project-angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/project-angular'}),

);

module.exports = app;
