import Hapi from '@hapi/hapi';

import { Op } from 'sequelize';

import { City, WeatherData } from '../models';

class WeatherDataController {

  public async weatherByCity(request: Hapi.Request, h: Hapi.ResponseToolkit): Promise<Error | Hapi.ResponseObject> {

    try {

      const { name, date } = request.params;

      //TODO check by regex, UpperCase/LowerCase

      let weatherDate;

      switch (date) {
        case 'today': {
          weatherDate = new Date();
          break;
        }
        case 'yesterday': {
          const d = new Date();
          weatherDate = d.setDate(d.getDate() - 1);
          break;
        }
        default: {
          weatherDate = Date.parse(date);
          break;
        }
      }

      const weather = await City.findAll({
        where: {
          name
        },
        include: [{
          model: WeatherData,
          where: {
            date: {
              [Op.eq]: weatherDate
            }
          }
        }]
      });

      //TODO check the db result

      await City.increment('requestCount', { by: 1, where: { name } });

      return h.response({
        date: weather[0].WeatherData[0].date,
        data: weather[0].WeatherData[0].data
      });

    } catch (err) {
      return err.message;
    }
  }
}

export default WeatherDataController;
