'use strict';

import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

import WeatherData from '../models/WeatherData';

class City extends Model {

  public id!: number;
  public name!: string;
  public averageTemperature!: number;
  public requestCount!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

City.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: DataTypes.STRING, allowNull: false },
  averageTemperature: {
    type: DataTypes.INTEGER,
    defaultValue: null
  },
  requestCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize,
  tableName: 'Cities'
});

City.hasMany(WeatherData, { foreignKey: 'cityId' })

export default City;
