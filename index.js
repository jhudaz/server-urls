require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();
const port = process.env.PORT || 4000;
const models = require('./models/index');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOSTNAME,
  dialect: process.env.DIALECT
});

app.use(cors())
app.use(bodyParser.json());

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//endpoint to get the user by email and password
app.post('/user', async (req, res) => {
  const singleUser = await models.User.findAll({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  });
  if (singleUser.length > 0) {
    res.json({
      success: true,
      token: singleUser[0].id
    })
  } else {
    res.json({
      success: false
    })
  }
})
//endpoint to get the user info
app.post('/getCurrentUser', async (req, res) => {
  const currentUser = await models.User.findOne({
    where: {
      id: req.body.id
    },
    attributes: ['id', 'email']
  });
  res.json(currentUser);
})
//endoint 
app.get('/getUserUrls', async (req, res) => {
  const userUrls = await models.Urls.findAll({
    where: {
      UserId: req.query.userId
    }
  })
  res.json(userUrls);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))