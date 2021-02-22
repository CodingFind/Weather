import axios from 'axios';

import { mean, round } from 'lodash';

import { City, WeatherData } from '../models';

const key = '5ae9ce85d33a9a73ee080dff8d98881e';


getWeatherData();

async function getWeatherData() {

  const citiesArr = await City.findAll({
    attributes: ['id', 'name']
  });

  for (const cityObj of citiesArr) {

    const weatherObj = await axios.get(`http://api.openweathermap.org/data/2.5/` +
      `forecast?q=${cityObj.name}&mode=json&cnt=7&appid=${key}`);

    await setWeatherData(cityObj, weatherObj.data);
  }
}

async function setWeatherData(cityObj: any, weatherObj: any) {

  const avgTemperatureArr = [];

  let countDay = 0;

  for (const data of weatherObj.list) {

    avgTemperatureArr.push(data.main.temp)

    await WeatherData.create({
      cityId: cityObj.id,
      date: decrementedDate(countDay++),
      data: {
        main: data.main,
        wind: data.wind,
        clouds: data.clouds
      }
    });
  }

  const cityForSetAvgTemp = await City.findOne({ where: { name: cityObj.name } });

  await cityForSetAvgTemp.update({ averageTemperature: round(mean(avgTemperatureArr), 0) });
}


// This function introduced because the weather api (api.openweathermap.org) does not match the task conditions.
// The data returned by 3 days (every 3 hours) and split into 7 days (as required by the task).
function decrementedDate(countDay: number) {

  const d = new Date();

  return d.setDate(d.getDate() - countDay);
}
