const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');
const cors = require('@koa/cors');

require('dotenv').config();

initDB();

const app = new Koa();

app.use(cors());

app.use(mount('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
})));

let port = process.env.PORT || 9000;

app.listen(port);

app.on('error', err => {
    log.error('server error', err)
});
