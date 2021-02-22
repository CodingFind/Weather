import Hapi from '@hapi/hapi'
import dotenv from 'dotenv';
dotenv.config();

import manifest from './manifest';
import logger from './logger';

import routes from './routes';

export const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || '127.0.0.1',
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    },
    timeout: {
      socket: 240000,
      server: 180000
    }
  }
});

async function prepare() {

  server.route(routes);

  await server.register(manifest as any);
}

export async function start() {

  await prepare();
  await server.start();

  logger.info(`Server running at: ${server.info.uri}`);
  logger.info(`Swagger docs available at: ${server.info.uri}/docs`);

  return server;
}
