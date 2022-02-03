const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const uri =
  'mongodb+srv://akash:akash@akash.1ehlv.mongodb.net/AKASH?retryWrites=true&w=majority';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => console.log('Connected to Database'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello from api');
});
app.listen(5000, () => {
  console.log('App is running on port 5000');
});
