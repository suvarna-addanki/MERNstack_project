const express = require('express')
const cors = require('cors')
const productRoutes =  require('./routes/productRoutes.js');

require('dotenv').config()

const mongoConfig = require('./config')

const app = express()

const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running....');
  });

app.use('/products', productRoutes);  

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    mongoConfig()
})