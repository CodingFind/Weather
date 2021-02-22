import Joi from '@hapi/joi';

export const CityListResponseSchema = Joi.object({
  count: Joi.number().integer().required().example(123),
  items: Joi.array().items(Joi.string().max(50).example('Kiev')).optional()
});

export const AverageTempResponseSchema = Joi.object({
  name: Joi.string().required().min(4).max(10).example('Kiev'),
  averageTemperature: Joi.number().integer().required().example(123)
});

export const CityPopularResponseSchema = Joi.object({
  mostRequests: Joi.string().required().min(4).max(10).example('Kiev'),
  requestCount: Joi.number().integer().required().example(123)
});
