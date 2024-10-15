require('dotenv').config();
const express = require('express');
const cors = require('cors');
const articleRoutes = require('./routes/articleRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
 
corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/articles', articleRoutes);
app.use('/api/auth', authRoutes);

console.log(process.env.DB_USER);
const database = require('./config/dbconnection');

database.sequelize.sync({force: false}).then(() => {
    console.log('Database Sync Success!');
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});