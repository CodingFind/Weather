import Hapi from '@hapi/hapi';

import { City } from '../models';

class CityController {

  public async citiesList(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Error | Hapi.ResponseObject> {

    try {

      const citiesObjects = await City.findAll({
        attributes: ['name']
      });

      const citiesNames = citiesObjects.map((city: any) => city.name);

      return h.response({
        count: citiesNames.length,
        items: citiesNames
      });

    } catch (err) {
      return err;
    }
  }

  public async averageTemperatureByCityName(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Error | Hapi.ResponseObject> {

    try {

      const { name } = request.params;
      //TODO check UpperCase/LowerCase

      const avgObj = await City.findOne({
        where: {
          name
        },
        attributes: ['name', 'averageTemperature']
      });

      //TODO check the db result

      return h.response({
        name: avgObj.name,
        averageTemperature: avgObj.averageTemperature
      });

    } catch (err) {
      return err.message;
    }
  }

  public async popularCity(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Error | Hapi.ResponseObject> {

    try {

      const cities = await City.findAll({
        order: [['requestCount', 'DESC']]
      });

      return h.response({
        mostRequests: cities[0].name,
        requestCount: cities[0].requestCount
      });

    } catch (err) {
      return err.message;
    }
  }
}

export default CityController;
