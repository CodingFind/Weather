import { flatten } from 'lodash';

import City from './CityRoutes';
import Weather from './WeatherRoutes';

export default flatten([
  City as any,
  Weather as any
]);
