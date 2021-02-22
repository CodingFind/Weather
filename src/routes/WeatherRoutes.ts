import Joi from '@hapi/joi';

import { WeatherDataResponseSchema } from '../schemas/WeatherData'

import WeatherDataController from '../controllers/WeatherDataController';

const controller = new WeatherDataController();

export default [{
    path: '/api/weather/{name}/{date}',
    method: 'GET',
    handler: controller.weatherByCity.bind(controller),
    config: {
        description: 'Get weather by city name',
        tags: ['api', 'weather'],
        validate: {
            options: { abortEarly: false },
            params: {
                name: Joi.string().required().min(4).max(10).default('Kiev'),
                date: Joi.string().required().min(4).max(10).default('today / yesterday / YYYY-MM-DD')
                //TODO check by regex
            }
        },
        response: {
            status: {
                200: WeatherDataResponseSchema
                //TODO 400: BadRequestErrorSchema,
                //TODO 500: InternalServerErrorSchema
            }
        }
    }
}];
