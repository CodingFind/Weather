import Joi from '@hapi/joi';

import {
  AverageTempResponseSchema,
  CityListResponseSchema,
  CityPopularResponseSchema
} from '../schemas/City';

import CityController from '../controllers/CityController';

const controller = new CityController();

export default [{
  path: '/api/cities',
  method: 'GET',
  handler: controller.citiesList.bind(controller),
  config: {
    description: 'Get cities',
    tags: ['api', 'cities'],
    validate: {
      options: { abortEarly: false }
      },
    response: {
      status: {
        200: CityListResponseSchema
        //TODO 400: BadRequestErrorSchema,
        //TODO 500: InternalServerErrorSchema
      }
    }
  }
}, {
  path: '/api/cities/average/{name}',
  method: 'GET',
  handler: controller.averageTemperatureByCityName.bind(controller),
  config: {
    description: 'Get average temperature by city name',
    tags: ['api', 'cities'],
    validate: {
      options: { abortEarly: false },
      params: {
        name: Joi.string().default('Kiev')
      }
    },
    response: {
      status: {
        200: AverageTempResponseSchema
        //TODO 400: BadRequestErrorSchema,
        //TODO 500: InternalServerErrorSchema
      }
    }
  }
}, {
  path: '/api/cities/popular',
  method: 'GET',
  handler: controller.popularCity.bind(controller),
  config: {
    description: 'Get most popular city by count of queries',
    tags: ['api', 'cities'],
    validate: {
      options: {abortEarly: false}
    },
    response: {
      status: {
        200: CityPopularResponseSchema
        //TODO 400: BadRequestErrorSchema,
        //TODO 500: InternalServerErrorSchema
      }
    }
  }
}];
