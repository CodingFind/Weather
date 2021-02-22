import * as server from './server';
import sequelize from './db';

async function start(){

  await sequelize.authenticate();

  await server.start();
}

start();
