# Weather HTTP API Server

### Installation
* check dbconfig.ts
* npm install
* npm run build
* npm run db:create
* npm run upload:data - the script delete and migrate db tables => seed the start data (cities) => upload weather data
* npm run start/dev => use Swagger docs at: http://127.0.0.1:3000/docs for check the app


### Currently used software stack:
* ES6
* TypeScript
* Hapi, @hapi/joi
* Sequelize/PostgreSQL
* Winston
* Swagger
