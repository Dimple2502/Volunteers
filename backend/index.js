const express = require('express');
const dbCon = require("./config");
const cors = require('cors');
const app = express();

// Connects to the database
dbCon()
const PORT = 5000 

// Sets cors to allow all origins
app.use(cors())

// Fecilitates the use of JSON
app.use(express.json())

app.use('/api/volunteers', require('./routes/volunteersRoute'));
app.use('/api/information', require('./routes/informationRoute'));
app.use('/api/signup', require('./routes/signupRoute'));

app.get('/', (req, res) => {
    res.send('Welcome to Teach For India backend!')
  })
  
  app.listen(PORT, () => {
    console.log(`Teach For India app listening on port ${PORT}`)
  })