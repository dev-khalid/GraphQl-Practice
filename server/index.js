const express = require('express'); 
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); 


const app = express(); 

app.use('/graphql',graphqlHTTP({
  schema: schema, 
  graphiql: true
})); 

app.get('/',(req,res) => { 
  res.send('Hello from api'); 
} )
app.listen(5000,() => { 
  console.log('App is running on port 5000'); 
})