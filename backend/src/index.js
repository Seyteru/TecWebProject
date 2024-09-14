const express = require('express');
const cors = require('cors');
const articleController = require('./controllers/articleController');
const authController = require('./controllers/authController');

const app = express();
 
corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/articles', articleController);
app.use('/api/auth', authController);

const database = require('./config/dbconnection');

database.sequelize.sync({force: true}).then(() => {
    console.log('Database Sync Success!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});