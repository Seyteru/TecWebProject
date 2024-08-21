const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
 
corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const database = require('./config/dbconnection');
database.sequelize.sync().then(() => {
    console.log('Database Sync Success!');
});

require('./routes/articleRoute')(app);

app.get('/', (req, res) => {
    res.json({ message: 'WELCOME TO PRESSPORTAL' })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});