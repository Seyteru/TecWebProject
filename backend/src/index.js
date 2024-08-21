const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const articleController = require('./controllers/articleController');

const app = express();
 
corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/articles', articleController);

const database = require('./config/dbconnection');
database.sequelize.sync().then(() => {
    console.log('Database Sync Success!');
});

app.get('/', (req, res) => {
    res.json({ message: 'WELCOME TO PRESSPORTAL' })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});