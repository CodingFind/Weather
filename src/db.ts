import { Sequelize } from 'sequelize';
import * as config from './dbconfig';
import logger from './logger';

const envConfig = (config.development) as any;

envConfig.logging = (message: string) => logger.info(message);

const sequelize = new Sequelize(envConfig);

export default sequelize;
