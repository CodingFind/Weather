'use strict';

import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class WeatherData extends Model {

    public id!: number;
    public cityId!: number;
    public date!: Date;
    public data!: { [key: string]: string };

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

WeatherData.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    cityId: { type: DataTypes.INTEGER, allowNull: false },
    date: {
        type: DataTypes.DATE,
        defaultValue: null
    },
    data: {
        type: DataTypes.JSONB,
        defaultValue: {}
    }
}, {
    sequelize,
    tableName: 'WeatherData'
});

export default WeatherData;
